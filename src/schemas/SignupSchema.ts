import { z } from "zod";
import { validateCpf } from "../services/UserCpf.js";
import { validatePhone } from "../services/UserPhone.js";

export const signupSchema = z
  .object({
    email: z.string().nonempty("Email Obrigatório").email("Email inválido"),

    confirmEmail: z
      .string()
      .nonempty("Email Obrigatório")
      .email("Email inválido"),

    password: z
      .string()
      .nonempty("Senha Obrigatória")
      .min(8, "Senha Inválida")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
        "A senha deve conter ao menos 8 caracteres, incluindo maiúscula, minúscula, número e símbolo",
      ),

    confirmPassword: z.string().nonempty("Confirme sua senha"),

    name: z
      .string()
      .nonempty("name Obrigatório")
      .transform((name) =>
        name
          .trim()
          .split(/\s+/)
          .map((word) =>
            word
              ? word[0].toLocaleUpperCase() + word.substring(1).toLowerCase()
              : "",
          )
          .join(" "),
      ),

    phone: z
      .string()
      .nonempty("Telefone Obrigatório")
      .refine(validatePhone, { message: "Telefone inválido" }),
    cpf: z
      .string()
      .nonempty("CPF Obrigatório")
      .refine(validateCpf, { message: "CPF inválido" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os emails não coincidem",
    path: ["confirmEmail"],
  });

export type SignupData = z.infer<typeof signupSchema>;
