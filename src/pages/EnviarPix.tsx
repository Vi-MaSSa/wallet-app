import ActionList from "../components/ui/ActionList/ActionList";
import ActionItem from "../components/ui/ActionList/ActionItem";
import { ROUTES } from "../routes";

export default function EnviarPix() {
  return (
    <ActionList>
      <ActionItem
        to={ROUTES.pixKeys}
        title="Minhas chaves"
        description="Gerencie suas chaves Pix"
      />

      <ActionItem to={ROUTES.pixExtract} title="Extrato Pix" />

      <ActionItem to={ROUTES.pixLimits} title="Limites Pix" />
    </ActionList>
  );
}
