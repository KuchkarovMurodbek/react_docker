import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path:'/about',
    element:<About/>
  }
]);

export default router;