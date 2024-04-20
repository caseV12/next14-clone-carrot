"use client";

import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import handleSignupForm from "./action";
import { error } from "console";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(handleSignupForm, null);
  console.log(state);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          errors={state?.fieldErrors?.username}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors?.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          errors={state?.fieldErrors.confirm_password}
        />
        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
