import { z } from "zod";

export const valorPixSchema = z.object({
  valorPix: z
    .string()
    .min(1, "Informe um valor")
    .transform((val) => Number(val.replace(/\D/g, "")) / 100)
    .refine((val) => val >= 0.01, {
      message: "Valor mínimo é R$ 0,01",
    }),
});

// 👇 TIPOS CORRETOS
export type ValorPixInput = z.input<typeof valorPixSchema>; // string
export type ValorPixOutput = z.output<typeof valorPixSchema>;  //number
