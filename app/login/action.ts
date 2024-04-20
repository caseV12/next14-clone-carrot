"use server";

import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default async function handleLoginForm(
  prevState: any,
  formData: FormData
) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(prevState);
  console.log(formData);
  return "액션 반환값";
}
