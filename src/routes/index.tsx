import MainLayout from "@/components/layouts/mainLayout";
import SecondLayout from "@/components/layouts/secondLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import ResetPass from "@/pages/ResetPass";
import { createBrowserRouter } from "react-router-dom";

export enum ROUTES {
  HOME = "/",
  RESET_PASS = "/LostPassword",
}

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
  {
    Component: SecondLayout,
    children: [
      {
        path: ROUTES.RESET_PASS,
        element: <ResetPass />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
