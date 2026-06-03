import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("handleSubmit dipanggil"); 
    console.log({ name, email, phone_number, password }); 

    if (!name.trim()) {
      setError("Nama tidak boleh kosong");
      return;
    }
    if (!email.trim()) {
      setError("Email tidak boleh kosong");
      return;
    }
    if (!phone_number.trim()) {
      setError("Nomor HP tidak boleh kosong");
      return;
    }
    if (!password.trim()) {
      setError("Password tidak boleh kosong");
      return;
    }
    if (password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(
        "https://api-ecoreport.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone_number, password }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Gagal membuat akun");
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError("Tidak dapat terhubung ke server");
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
          <h1 className="text-2xl font-extrabold text-[#1E3A8A] text-start mb-5">
            Buat Akun Baru
          </h1>
          <p className="text-gray-500 text-sm">
            Halo!, Selamat datang mari lestarikan lingkungan kita
          </p>
          <p className="text-gray-500 mb-3 text-sm">Go Green</p>

          {error && (
            <p className="mb-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              ❌ {error}
            </p>
          )}

          {success && (
            <p className="mb-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              ✅ Akun berhasil dibuat! Mengarahkan ke halaman login...
            </p>
          )}

          <Field>
            <FieldLabel htmlFor="input-name">Full Name</FieldLabel>
            <Input
              id="input-name"
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-email">Email</FieldLabel>
            <Input
              id="input-email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-phone">Phone number</FieldLabel>
            <Input
              id="input-phone"
              type="number"
              placeholder="Enter Phone Number"
              onChange={(e) => setPhone_number(e.target.value)}
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

          <p className="mt-3 text-gray-800 mb-4 text-center">-- Buat Akun --</p>

          <Button
            type="submit"
            disabled={loading || success}
            className="w-full p-6 bg-[#2563EB] text-white"
          >
            {loading ? "Loading..." : success ? "Berhasil! ✅" : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
