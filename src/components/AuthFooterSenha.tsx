import { Link } from "react-router-dom";

import { ReactNode } from "react";
import { ROUTES } from "../routes";

interface AuthFooterSenhaProps {
  children?: ReactNode;
  forgotPasswordLabel?: string;
  forgotPasswordRoute?: string;
}

export default function AuthFooterSenha({
  children = null,
  forgotPasswordLabel = "Esqueci minha senha",
  forgotPasswordRoute = ROUTES.forgotPassword,
}: AuthFooterSenhaProps) {
  return (
    <div className="flex justify-end mt-0.5">
      {children}

      <Link
        to={forgotPasswordRoute}
        className="text-sm text-gray-400 hover:text-gray-300 transition"
      >
        {forgotPasswordLabel}
      </Link>
    </div>
  );
}
