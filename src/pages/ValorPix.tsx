import SidebarContainer from "../components/SidebarContainer";
import HomeCard from "../components/HomeCard";
import FormField from "../components/form/FormField";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { valorPixSchema, valorPixData } from "../schemas/ValorPixSchema";
import { Resolver } from "react-hook-form";
import Card from "../components/ui/Card";
import MaskedInput from "../components/MaskedInput";

export default function ValorPix() {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<valorPixData>({
    resolver: zodResolver(valorPixSchema) as Resolver<valorPixData>,
    mode: "onChange",
  });

  return (
    <SidebarContainer>
      <HomeCard>
        <div className="space-y-6">
          <Card
            variant="elevated"
            header={
              <h2 className="text-lg font-semibold">Digite seu valor pix</h2>
            }
          >
            <FormField label="Valor Pix" error={errors.valorPix}>
              <Controller
                name="valorPix"
                control={control}
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={Number}
                    scale={2}
                    signed={false as any}
                    thousandsSeparator="."
                    radix=","
                    padFractionalZeros
                    normalizeZeros
                    prefix="R$ "
                    placeholder="R$ 0,00"
                    onAccept={(value) => field.onChange(String(value))}
                    error={errors.valorPix}
                  />
                )}
              />
            </FormField>
            {isValid && (
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 cursor-pointer transition">
                Enviar Valor
              </button>
            )}
          </Card>
        </div>
      </HomeCard>
    </SidebarContainer>
  );
}
