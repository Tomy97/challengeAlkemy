import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { MyTeam } from "../Pages/MyTeam/MyTeam";

// Todo routes: No tengo que poder redirigirme del login a la home o al layout main, sin estar autenticado
export const routes = createBrowserRouter(
  [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/my-team",
          element: <MyTeam />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
