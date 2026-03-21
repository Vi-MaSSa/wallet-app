import { z } from "zod";

export const valorPixSchema = z.object({
  valorPix: z
    .string()
    .min(1, "Informe um valor")
    .transform((val) => {
      const numeric = Number(val.replace(/\D/g, "")) / 100;
      return numeric;
    })
    .refine((val) => val >= 0.01, {
      message: "Valor mínimo é R$ 0,01",
    }),
});

export type valorPixData = z.infer<typeof valorPixSchema>;
