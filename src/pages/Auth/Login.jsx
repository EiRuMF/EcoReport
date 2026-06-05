import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import api from "@/api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", String(res.data.user.role));

      console.log("Response:", res.data);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      console.log("Error:", err);

      if (err.response) {
        setError(err.response.data.message || "Gagal login");
      } else {
        setError("Tidak dapat terhubung ke server");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-[500px] relative items-start bg-white rounded-xl justify-start text-black p-6"
        >
          <h1 className="text-3xl font-bold text-[#1E3A8A] text-center mb-5 font-poppins">
            Selamat Datang
          </h1>
          <p className="text-gray-500 font-poppins">
            Halo!, Selamat datang mari lestarikan lingkungan kita
          </p>
          <p className="text-gray-500 mb-3">Go Green</p>

          {error && (
            <p className="mb-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              ❌ {error}
            </p>
          )}
          {success && (
            <p className="mb-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              ✅ Kamu berhasil login. Mengarahkan ke halaman...
            </p>
          )}

          <Field>
            <FieldLabel htmlFor="input-name">Email</FieldLabel>
            <Input
              id="input-name"
              type="email"
              placeholder="Enter Email/Phone No"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-password">Password</FieldLabel>
            <Input
              id="input-password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? "Loading..." : "Login"}
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
