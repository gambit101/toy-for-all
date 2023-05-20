
const Blog = () => {
    return (
        <div>
            <div className="my-6">
                <div className="bg-slate-400 p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-center">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className="text-center font-bold py-6" >Access Token: An access token is a credential that is issued by an authentication server e.g., after a user successfully logs in and is used to access protected resources e.g., APIs. It typically has a limited lifespan and contains information such as the users identity and permissions. The access token is sent with each request to the server that hosts the protected resource, allowing the server to validate the request and grant or deny access based on the tokens information. </p>
                    <p className="text-center font-bold py-6" >Refresh Token: A refresh token is also issued by the authentication server but has a longer lifespan than an access token. It is used to obtain a new access token when the current one expires.</p>
                </div>
            </div>
            <div className="my-6">
                <div className="bg-slate-400 p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-center">Compare SQL and NoSQL databases?</h2>
                    <p className="text-center font-bold py-6" >SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that are designed for different purposes and have distinct characteristics.</p>
                </div>
            </div>
            <div className="my-6">
                <div className="bg-slate-400 p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-center">What is express js? What is Nest JS?</h2>
                    <p className="text-center font-bold py-6" >Express.js is a popular web application framework for Node.js. It provides a set of features and tools to build web applications and APIs easily and efficiently. Express.js simplifies the process of handling HTTP requests, routing, middleware management, and response generation.</p>
                    <p className="text-center font-bold py-6" >NestJS is a progressive TypeScript-based web application framework for building scalable and maintainable server-side applications. It is inspired by Angular, borrowing many of its concepts and design patterns, which makes it well-suited for developing enterprise-level applications.</p>
                </div>
            </div>
            <div className="my-6">
                <div className="bg-slate-400 p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-center">What is MongoDB aggregate and how does it work?</h2>
                    <p className="text-center font-bold py-6" >In MongoDB, the aggregate function is a powerful tool that allows you to perform advanced data processing and analysis operations on collections of documents. The aggregate function takes an array of stages as its argument, with each stage specifying a specific operation or transformation to be applied to the data.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;