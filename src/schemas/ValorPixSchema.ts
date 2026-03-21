import z from "zod";

export const valorPixSchema = z.object({
  valorPix: z.coerce.number().min(0.01, "Valor mínimo é R$ 0,01"),
});

export type valorPixData = z.infer<typeof valorPixSchema>;
