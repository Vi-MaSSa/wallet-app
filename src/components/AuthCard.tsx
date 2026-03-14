import { ReactNode } from "react";
import Card from "./ui/Card";

interface AuthCardProps {
  children?: ReactNode;
  className?: string;
}

export default function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <Card variant="auth" className={className}>
      {children}
    </Card>
  );
}
