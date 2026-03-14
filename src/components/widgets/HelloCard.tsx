import WidgetCard from "../cards/WidgetCard";

export default function HelloCard() {
  return (
    <WidgetCard title="Bem-vindo ao seu painel financeiro,">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          Vinícius 👋
        </h2>
      </div>
    </WidgetCard>
  );
}
