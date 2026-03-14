import z from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .nonempty("Email Obrigatório")
    .email("Email inválido")
    .toLowerCase(),
  password: z.string().nonempty("Senha Obrigatória").min(8, "Senha inválida"),
});

export type SigninData = z.infer<typeof signinSchema>;
