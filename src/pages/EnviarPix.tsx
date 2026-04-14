import { useEffect, useState } from "react";
import SidebarContainer from "../components/SidebarContainer";
import { PixKeyList } from "../components/PixKeyList";
import HomeCard from "../components/HomeCard";
import Card from "../components/ui/Card";
import input from "../components/Input";

type PixKeyType = "cpf" | "email" | "phone" | "random";

type PixKey = {
  id: string;
  type: PixKeyType;
  value: string;
};

export default function EnviarPix() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [keys, setKeys] = useState<PixKey[]>([]);

  useEffect(() => {
    setKeys([
      { id: "1", type: "cpf", value: "123.456.789-00" },
      { id: "2", type: "email", value: "user@email.com" },
    ]);
  }, []);

  return (
    <SidebarContainer>
      <HomeCard>
        <div className="space-y-6">
          {/* Card: Chaves Pix */}
          <Card
            variant="elevated"
            header={
              <h2 className="text-lg font-semibold">Minhas chaves Pix</h2>
            }
          >
            <PixKeyList
              keys={keys}
              selectedKeyId={selectedKey ?? undefined}
              onSelect={setSelectedKey}
            />

            {selectedKey && (
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 cursor-pointer transition">
                Continuar envio
              </button>
            )}
          </Card>
        </div>
      </HomeCard>
    </SidebarContainer>
  );
}
