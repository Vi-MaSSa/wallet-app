interface ActionListProps {
  children: React.ReactNode;
}

export default function ActionList({ children }: ActionListProps) {
  return (
    <ul
      className="
      [&>li]:flex
      [&>li]:items-center
      [&>li]:justify-between
      [&>li]:py-3
      [&>li]:px-2
      [&>li]:rounded-lg
      [&>li]:cursor-pointer
      [&>li]:transition
      [&>li]:border-b
      [&>li]:border-zinc-200
      dark:[&>li]:border-zinc-700
      [&>li:hover]:bg-zinc-100
      dark:[&>li:hover]:bg-zinc-800
    "
    >
      {children}
    </ul>
  );
}
