import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <form
          action=""
          className="w-[500px] relative items-start bg-white rounded-xl justify-start text-black p-6"
        >
          <h1 className="text-2xl font-extrabold text-[#1E3A8A] text-start mb-5">
            Buat Akun Baru
          </h1>
          <p className="text-gray-500 text-sm">
            Halo!, Selamat datang mari lestarikan lingkungan kita
          </p>
          <p className="text-gray-500 mb-3 text-sm">Go Green</p>

          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Full Name</FieldLabel>
            <Input
              id="input-demo-api-key"
              type="text"
              placeholder="Enter Username"
              className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Email</FieldLabel>
            <Input
              id="input-demo-api-key"
              type="email"
              placeholder="Enter Email"
              className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Phone number</FieldLabel>
            <Input
              id="input-demo-api-key"
              type="number"
              placeholder="Enter Phone Number"
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

          <p className="mt-3 text-gray-800 mb-4 text-center">-- Buat Akun --</p>

          <Button type="submit" className="w-full p-6 bg-[#2563EB] text-white">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
