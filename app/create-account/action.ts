"use server";

import { z } from "zod";

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자열만 됨",
        required_error: "유저네임 줘",
      })
      .max(10)
      .refine((username) => !username.includes("임"), "임씨는 안됩니다"),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "비밀번호 확인이 일치하지 않습니다.",
    path: ["confirm_password"],
  });

export default async function handleSignupForm(
  prevState: any,
  formData: FormData
) {
  const payload = {
    ...Object.fromEntries(formData.entries()),
  };
  console.log(payload);
  const parseResult = formSchema.safeParse(payload);
  if (!parseResult.success) {
    console.log(parseResult.error.flatten());
    return parseResult.error.flatten();
  } else {
    console.log(parseResult.data);
  }
}
