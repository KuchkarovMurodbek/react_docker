import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    // element:  <Home/>,
    errorElement: <ErrorPage />,
    // loader: () => ({ message: "Hello Data Router!" }),
    // Component() {
    //   let data = useLoaderData() as { message: string };
    //   return <h1>{data.message}</h1>;
    // },
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    // Lifted blog splat route
    path: "/blog/*",
    children: [
      // New blog index route
      { index: true, Component: () => <h1>Blog Index</h1> },
      // Blog subapp splat route added for /blog/posts matching
      { path: "*", Component: Blog },
    ],
  },

]);

export default router;