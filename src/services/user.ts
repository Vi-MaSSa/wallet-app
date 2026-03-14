import { api } from "./api";
import { SignupData } from "../schemas/SignupSchema";
import { SigninData } from "../schemas/SigninSchema";

export function signup(data: SignupData) {
  // clonar para evitar a mutação do objeto original
  const payload = { ...data } as any;
  delete payload.confirmEmail;
  delete payload.confirmPassword;

  return api.post("/auth/signup", payload);
}

export function signin(data: SigninData) {
  return api.post("/auth/signin", data);
}

export function googleLogin(token: string) {
  return api.post("/auth/google", {
    token,
  });
}
