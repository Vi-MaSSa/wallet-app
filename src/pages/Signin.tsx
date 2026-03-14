import AuthFooter from "../components/AuthFooter";
import AuthFooterSenha from "../components/AuthFooterSenha";
import AuthFooterLogin from "../components/AuthFooterLogin";
import Button from "../components/ButtonSignin";
import Input from "../components/Input";
import AuthLayout from "../components/layout/AuthLayout";
import FormField from "../components/form/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, SigninData } from "../schemas/SigninSchema";
import { signin } from "../services/user";
import Cookies from "js-cookie";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninData>({
    resolver: zodResolver(signinSchema),
  });

  async function handleSubmitForm(data: SigninData) {
    try {
      const token = await signin(data);
      Cookies.set("token", token.data, { expires: 1 });
      console.log(Cookies.get("token"));
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <AuthLayout
      title="Acesse sua Wallet"
      footer={
        <AuthFooter>
          <AuthFooterLogin />
        </AuthFooter>
      }
    >
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <FormField label="Email" error={errors.email}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            rules={{ required: "Email é obrigatório" }}
            error={errors.email}
          />
        </FormField>

        <FormField label="Senha" error={errors.password}>
          <Input
            type="password"
            placeholder="Senha"
            register={register}
            name="password"
            rules={{ required: "Senha é obrigatória" }}
            error={errors.password}
          />
          <AuthFooterSenha />
        </FormField>

        <Button type="submit">Entrar</Button>
      </form>
    </AuthLayout>
  );
}
