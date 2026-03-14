import { ReactNode } from "react";

interface HomeCardProps {
  children?: ReactNode;
  className?: string;
}

export default function HomeCard({ children, className = "" }: HomeCardProps) {
  return (
    <div
      className={`
   relative

  w-full
  min-h-screen

  md:rounded-xl

  md:max-w-[1100px]
  2xl:max-w-[1700px]

  px-6 pt-6 pb-8
  sm:px-8 sm:pt-8 sm:pb-10
  md:px-10 md:pt-8 md:pb-12

  transition-all duration-300

        ${className}
      `}
    >
      {children}
    </div>
  );
}
