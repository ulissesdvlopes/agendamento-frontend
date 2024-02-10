import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Schedulings from "./pages/Schedulings";
import Profile from "./pages/Profile";
import AuthLayout from "./components/Layout/AuthLayout";

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
        },
      ]
    },
    {
        path: '/app',
        element: <AuthLayout />,
        children: [
            {
                path: "/app/agendamentos",
                element: <Schedulings />
            },
            {
                path: "/app/perfil",
                element: <Profile />
            },
        ]
    }
]);

export default router;
