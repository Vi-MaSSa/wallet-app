import Button from "../components/ButtonSignin";
import Input from "../components/Input";
import AuthLayout from "../components/layout/AuthLayout";
import FormField from "../components/form/FormField";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupData } from "../schemas/SignupSchema";
import { signup } from "../services/user";
import { useNavigate } from "react-router";
import MaskedInput from "../components/MaskedInput";
import { ROUTES } from "../routes";

export default function Signup() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });
  const navigate = useNavigate();

  async function handleSubmitForm(data: SignupData) {
    try {
      const response = await signup(data);
      navigate(ROUTES.signin);
      console.log(response);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  return (
    <AuthLayout
      title="Crie sua conta"
      backLink={{ to: ROUTES.signin, label: "Voltar" }}
    >
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <FormField label="Nome completo" error={errors.name}>
          <Input
            name="name"
            type="text"
            placeholder="Nome completo"
            register={register}
            rules={{ required: true }}
            error={errors.name}
          />
        </FormField>

        <FormField label="Email" error={errors.email}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            rules={{ required: true }}
            error={errors.email}
          />
        </FormField>

        <FormField label="Confirme seu email" error={errors.confirmEmail}>
          <Input
            name="confirmEmail"
            type="email"
            placeholder="Confirme seu email"
            register={register}
            rules={{ required: true }}
            error={errors.confirmEmail}
          />
        </FormField>

        <FormField label="CPF" error={errors.cpf}>
          <Controller
            name="cpf"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask="000.000.000-00"
                placeholder="Digite CPF"
                error={errors.cpf}
              />
            )}
          />
        </FormField>

        <FormField label="Telefone" error={errors.phone}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              minLength: { value: 15, message: "Telefone Inválido!" },
            }}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask="(00) 00000-0000"
                placeholder="Telefone"
                error={errors.phone}
              />
            )}
          />
        </FormField>

        <FormField label="Senha" error={errors.password}>
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            register={register}
            rules={{ required: true }}
            error={errors.password}
          />
        </FormField>

        <FormField label="Confirme sua senha" error={errors.confirmPassword}>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            register={register}
            rules={{ required: "Confirme sua senha" }}
            error={errors.confirmPassword}
          />
        </FormField>

        <Button type="submit">Cadastrar</Button>
      </form>
    </AuthLayout>
  );
}
