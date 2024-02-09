import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />
        },
        {
            path: "/cadastro",
            element: <Register />
          }
      ]
    },
]);

export default router;
