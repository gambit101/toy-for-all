import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import AddToy from "../pages/addToy/AddToy";
import CheckOut from "../pages/checkout/CheckOut";
import AllToys from "../pages/allToys/AllToys";
import MyToys from "../pages/myToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/viewDetails/ViewDetails";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        },
        {
          path: 'myToys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'viewDetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

  export default router