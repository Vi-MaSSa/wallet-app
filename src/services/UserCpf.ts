import { cpf } from "cpf-cnpj-validator";

cpf.isValid("529.982.247-25"); // true
cpf.isValid("111.111.111-11"); // false

export function validateCpf(value: string | undefined | null): boolean {
  if (!value) return false;

  return cpf.isValid(value);
}
