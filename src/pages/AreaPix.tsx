import SidebarContainer from "../components/SidebarContainer";
import ActionCard from "../components/cards/ActionCards";
import HomeCard from "../components/HomeCard";
import PixIcon from "../components/widgets/icons/PixIcon";
import ReceiveIcon from "../components/widgets/icons/ReceiveIcon";
import CopyPasteIcon from "../components/widgets/icons/CopyPasteIcon";
import { ROUTES } from "../routes";

export default function AreaPix() {
  return (
    <SidebarContainer>
      <HomeCard>
        {/* AREA PIX */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold dark:text-white pb-8">Área Pix</h2>
        </div>

        {/* CARD ENVIAR */}
        <ActionCard icon={<PixIcon />} label="Enviar" to={ROUTES.pixEnviar} />

        {/* GRID DE AÇÕES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {/* Receber */}
          <ActionCard
            icon={<ReceiveIcon />}
            label="Receber"
            to={ROUTES.pixReceive}
          />

          {/* Copia e cola */}
          <ActionCard
            icon={<CopyPasteIcon />}
            label="Copia e cola"
            to={ROUTES.pixCopyPaste}
          />
        </div>
      </HomeCard>
    </SidebarContainer>
  );
}
