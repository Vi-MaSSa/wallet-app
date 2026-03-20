import Card from "./ui/Card";

type PixKey = {
  id: string;
  type: "cpf" | "email" | "phone" | "random";
  value: string;
};

type Props = {
  keys: PixKey[];
  selectedKeyId?: string;
  onSelect: (id: string) => void;
};

export function PixKeyList({ keys, selectedKeyId, onSelect }: Props) {
  return (
    <div className="rounded-2xl shadow p-4 space-y-3">
      <h2 className="text-lg font-semibold text-white-800">
        Minhas chaves Pix
      </h2>

      {keys.map((key) => {
        const isSelected = key.id === selectedKeyId;

        return (
          <div
            key={key.id}
            onClick={() => onSelect(key.id)}
            className={`p-3 rounded-xl border cursor-pointer transition 
              ${
                isSelected
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-blue-200 hover:bg-blue-100 dark:border-blue-700 dark:hover:bg-blue-700/10"
              }
            `}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-white-800 uppercase">{key.type}</p>
                <p className="text-white-800 font-medium">{key.value}</p>
              </div>

              {isSelected && (
                <span className="text-blue-600 text-sm font-semibold">
                  Selecionado
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
