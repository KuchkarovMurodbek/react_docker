import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home/>,
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
  }
]);

export default router;