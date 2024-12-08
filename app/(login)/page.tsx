"use client";

import Image from "next/image";
import { poppins } from "../theme/fonts";
import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setIsloading] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      setIsloading(!loading);
      axiosInstance
        .post("login", {
          name: name,
          password: password,
        })
        .then((res) => {
          if (res.data.status === 200 || res.data.status === 201) {
            if (res.data.user.roleId == 2) {
              setError(res.data.message);
            }
          } else {
            Cookies.set("token", res.data.token);
            Cookies.set("userId", btoa(res.data.user.id));
            router.push("/dashboard");
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsloading(false);
        });
    } catch (error: any) {
      setError(error.message);
      setIsloading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start gap-4 h-screen lg:px-32 md:px-16 px-8">
      <Image src="/cheva.png" width={163} height={43} alt="logo chevalier" />
      <h1
        className={`${poppins.className} font-bold text-neutral-950 text-4xl`}
      >
        Selamat Datang!
      </h1>
      <p className="text-neutral-950">
        Masukkan Username dan Password untuk mengakses akun
      </p>

      {loading && (
        <p className="text-neutral-50 bg-primary-500 p-2 rounded-lg w-full">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-neutral-50 bg-error p-2 rounded-lg w-full">
          {error}
        </p>
      )}

      <form onSubmit={handleLogin} method="post" className="w-full">
        <div className="flex flex-col text-neutral-950 w-full">
          <label htmlFor="name">Username</label>
          <input
            className="border-2 border-neutral-500 w-full p-4 rounded-md focus:border-primary-500 focus:outline-none focus:ring-0"
            type="text"
            name="name"
            id="name"
            placeholder="Masukkan Username"
            value={name}
            onChange={(value) => setUsername(value.target.value)}
          />
        </div>
        <div className="flex flex-col text-neutral-950 w-full my-4">
          <label htmlFor="password">Password</label>
          <input
            className="border-2 border-neutral-500 w-full p-4 rounded-md focus:border-primary-500 focus:outline-none focus:ring-0"
            type="password"
            name="password"
            id="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(value) => setPassword(value.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-neutral-50 bg-primary-500 w-full py-4 rounded-lg hover:bg-primary-700 focus:outline-primary-900"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}
