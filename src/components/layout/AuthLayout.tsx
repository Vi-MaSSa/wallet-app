import { ReactNode } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import Card from "../ui/Card";
import Logo from "../Logo";
import { FaArrowLeft } from "react-icons/fa6";

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  backLink?: { to: string; label?: string };
}

export default function AuthLayout({
  title,
  children,
  footer,
  backLink,
}: AuthLayoutProps) {
  return (
    <div className="relative min-h-dvh flex items-center justify-center px-6">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card variant="auth" className="relative max-w-md w-full">
        {backLink ? (
          <Link
            to={backLink.to}
            className="absolute left-3 top-3 text-2xl cursor-pointer transition text-blue-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-400"
          >
            <FaArrowLeft />
            {backLink.label}
          </Link>
        ) : null}

        <div className="flex flex-col items-center">
          <Logo />
          <h1 className="text-center text-blue-900 text-lg sm:text-xl font-medium mb-4 dark:text-white">
            {title}
          </h1>
        </div>

        <div className="w-full">{children}</div>

        {footer ? <div className="mt-8">{footer}</div> : null}
      </Card>
    </div>
  );
}
