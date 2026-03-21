import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App";

import { initDarkMode } from "./utils/initDarkMode";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import EsqueciSenha from "./pages/EsqueciSenha";
import Home from "./pages/Home";
import AreaPix from "./pages/AreaPix";
import EnviarPix from "./pages/EnviarPix";
import ValorPix from "./pages/ValorPix";
import { ROUTES } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: ROUTES.home, element: <Home /> },
      { path: ROUTES.signin, element: <Signin /> },
      { path: ROUTES.signup, element: <Signup /> },
      { path: ROUTES.forgotPassword, element: <EsqueciSenha /> },
      { path: ROUTES.areaPix, element: <AreaPix /> },
      { path: ROUTES.pixEnviar, element: <EnviarPix /> },
      { path: ROUTES.valorPix, element: <ValorPix /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

initDarkMode();

createRoot(rootElement).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
);
