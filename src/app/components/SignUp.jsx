"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { auth } from "../firebase";

export default function SignUpForm() {
  const [err, setErr] = useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const name = e.target[0].value;
  //   const email = e.target[1].value;
  //   const password = e.target[2].value;
  //   const check = e.target[3].value;

  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     setErr(true);
  //   }
  // };

  const [registerEmail, setEmail] = useState("");
  const [registerPassword, setPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={register}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input
            size="lg"
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

        <Button type="submit" onClick={register} className="mt-6" fullWidth>
          Register
        </Button>
        {err && <span>Something went wrong</span>}
      </form>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
          Sign In
        </a>
      </Typography>
    </Card>
  );
}
