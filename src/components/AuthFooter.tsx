import { Link } from "react-router-dom";

import { ReactNode } from "react";
import { ROUTES } from "../routes";

interface AuthFooterProps {
  children?: ReactNode;
  signUpLabel?: string;
  signUpRoute?: string;
}

export default function AuthFooter({
  children = null,
  signUpLabel = "Cadastre-se",
  signUpRoute = ROUTES.signup,
}: AuthFooterProps) {
  return (
    <div className="flex flex-col w-full gap-6 mt-8">
      {/* Divisor */}
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-gray-500 uppercase tracking-widest select-none">
          ou
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="flex flex-col items-center w-full gap-3">
        {children}

        <div className="flex flex-col items-center w-full">
          <p className="text-sm text-gray-400">
            Não possui conta?{" "}
            <Link
              to={signUpRoute}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              {signUpLabel}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
