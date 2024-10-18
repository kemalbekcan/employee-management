// import PrivateRoute from "@/components/private-route";
import Base from "@/components/layout/base";
import Admin from "@/pages/dashboard/admin";
import Auth from "@/components/layout/auth";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },
  {
    path: "/uyelik",
    element: <Auth />,
    children: [
      {
        path: "giris-yap",
        element: <Login />,
      },
      {
        path: "kayit-ol",
        element: <Register />,
      },
    ],
  },
]);

export default router;
