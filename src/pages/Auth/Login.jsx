import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <form
          action=""
          className="w-[500px] relative items-start bg-white rounded-xl justify-start text-black p-6"
        >
          <h1 className="text-3xl font-bold text-[#1E3A8A] text-center mb-5">
            Selamat Datang
          </h1>
          <p className="text-gray-500 ">
            Halo!, Selamat datang mari lestarikan lingkungan kita
          </p>
          <p className="text-gray-500 mb-3">Go Green</p>

          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Email</FieldLabel>
            <Input
              id="input-demo-api-key"
              type="email"
              placeholder="Enter Email/Phone No"
              className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Password</FieldLabel>
            <Input
              id="input-demo-api-key"
              type="password"
              placeholder="Enter Password"
              className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
            />
          </Field>

          <p className="mt-3 text-gray-500 mb-4 text-start">
            Lupa password kamu?{" "}
            <a href="/register">
              <span className="text-blue-500 hover:text-[#2563EB] hover:font-semibold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#2563EB] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                click!
              </span>
            </a>{" "}
            Disini
          </p>

          <Button
            type="submit"
            className="w-full p-6 bg-[#2563EB] rounded-2xl text-white"
          >
            Login
          </Button>

          <p className="mt-3 text-gray-500">
            Belum punya akun?{" "}
            <a href="/register">
              <span className="text-blue-500 hover:text-[#2563EB] hover:font-semibold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#2563EB] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                register
              </span>
            </a>{" "}
            Disini
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
