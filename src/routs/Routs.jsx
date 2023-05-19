import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import AddToy from "../pages/addToy/AddToy";
import CheckOut from "../pages/checkout/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'addToy',
          element: <AddToy></AddToy>
        },
        {
          path: 'checkOut/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        }
      ]
    },
  ]);

  export default router