"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { auth } from "../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>

        <Button className="mt-6" fullWidth onClick={loginIn}>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Dont have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign Up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
