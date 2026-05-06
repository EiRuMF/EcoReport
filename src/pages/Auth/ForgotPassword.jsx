import React from 'react'
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <form
          action=""
          className="w-full relative items-start bg-white rounded-xl justify-start text-black p-6"
        >
          <h1 className="text-3xl font-bold text-black text-center mb-5">
            Forgot Password
          </h1>
          <p className="text-gray-500 ">
            Halo!, Buat kembali password jika lupa :)
          </p>
          <p className="text-gray-500 mb-3">Go Green</p>

          <input
            type="email"
            placeholder="Enter Email/Phone No"
            className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
          />

          <Button type="submit" className="w-full p-6 bg-[#4C5C2D] text-white">
            Login
          </Button>

          <p className="mt-3 text-gray-500">
            Belum punya akun?{" "}
            <a href="/register">
              <span className="text-gray-500 hover:text-[#4C5C2D] hover:font-semibold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#4C5C2D] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                register
              </span>
            </a>{" "}
            Disini
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword
