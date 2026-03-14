import WidgetCard from "../cards/WidgetCard";
import FeatureVisibility from "./FeatureVisibility";

export default function BalanceWidget() {
  return (
    <WidgetCard title="Saldo Total">
      <FeatureVisibility>
        <div className="text-3xl font-bold">R$ 12.540,00</div>
      </FeatureVisibility>

      <p className="text-sm text-zinc-500 mt-2">Atualizado hoje</p>
    </WidgetCard>
  );
}
