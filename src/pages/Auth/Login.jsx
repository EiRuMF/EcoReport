import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <form
          action=""
          className="w-full relative items-start justify-start text-black p-6"
        >
          <h1 className="text-2xl font-bold text-white text-center">Login</h1>
          <p className="text-gray-500">Welcome!</p>
          <p className="text-gray-500 mb-3">Enjoy ur coffee</p>

          <input
            type="number"
            placeholder="phone number"
            className="w-full mb-3 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-3 border rounded-lg bg-[#607274] text-white placeholder:text-white"
          />

          {/* <Button type="submit" className="w-full bg-[#607274]">
            Login
          </Button> */}

          <p className="mt-3 text-gray-500">
            Belum punya akun?{" "}
            <a href="/register">
              <span className="text-gray-500 hover:text-gray-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
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
