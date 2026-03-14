import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { googleLogin } from "../services/user";

export default function AuthFooterLogin() {
  async function handleGoogleLogin(res: CredentialResponse) {
    if (!res.credential) return;

    try {
      const response = await googleLogin(res.credential);

      console.log("Usuário Google:", response.data);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Erro no login Google", error);
    }
  }

  return (
    <div className="flex flex-col items-center w-full gap-8 mt-4">
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => console.log("Erro no login Google")}
      />
    </div>
  );
}
