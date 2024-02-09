import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />
        }
      ]
    },
]);

export default router;
