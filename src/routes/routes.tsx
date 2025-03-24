import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { MyTeam } from "../Pages/MyTeam/MyTeam";
import { RoutingConstants } from '../constants/Routing'
// Todo routes: No tengo que poder redirigirme del login a la home o al layout main, sin estar autenticado
export const routes = createBrowserRouter(
  [
    {
      path: RoutingConstants.START,
      element: <Login />,
    },
    {
      path: RoutingConstants.LOGIN,
      element: <Login />,
    },
    {
      path: RoutingConstants.START,
      element: <MainLayout />,
      children: [
        {
          path: RoutingConstants.HOME,
          element: <Home />,
        },
        {
          path: RoutingConstants.MYTEAM,
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
