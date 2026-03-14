import Button from "../components/ButtonSignin";
import Input from "../components/Input";
import AuthLayout from "../components/layout/AuthLayout";
import FormField from "../components/form/FormField";
import { useForm } from "react-hook-form";
import { ROUTES } from "../routes";

export default function EsqueciSenha() {
  interface ForgotData {
    email: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotData>();

  function handleSubmitForm(data: ForgotData) {
    console.log(data);
  }

  return (
    <AuthLayout
      title="Recuperar senha"
      backLink={{ to: ROUTES.signin, label: "Voltar" }}
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
            error={errors.email}
            rules={{ required: true }}
          />
        </FormField>

        <Button type="submit">Enviar</Button>
      </form>
    </AuthLayout>
  );
}
