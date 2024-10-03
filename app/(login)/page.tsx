"use client";

import Image from "next/image";
import { poppins700 } from "../theme/fonts";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../lib/axios";
import { url } from "inspector";
import { tree } from "next/dist/build/templates/app-page";

export default function Home() {
  // const router = useRouter();
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setIsloading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      setIsloading(!loading);
      const response = await axiosInstance.post(
        'login',
        { "name": name, "password": password }
      );
      console.log(response);
    } catch (error: any) {
      setError(error.message);
      setIsloading(false);
      console.log(error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-start gap-4 h-screen lg:px-32 md:px-16 px-8">

      <Image src='/cheva.png' width={163} height={43} alt="logo chevalier" />
      <h1 className={`${poppins700.className} text-neutral-950 text-4xl`}>
        Selamat Datang!
      </h1>
      <p className="text-neutral-950">
        Masukkan Username dan Password untuk mengakses akun
      </p>

      { loading && <p className="text-neutral-50 bg-primary-500 p-2 rounded-lg w-full">Loading...</p>}
      { error && <p className="text-neutral-50 bg-error p-2 rounded-lg w-full">{ error }</p>}

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
        <button type="submit" className="text-neutral-50 bg-primary-500 w-full py-4 rounded-lg hover:bg-primary-700 focus:outline-primary-900">
          Masuk
        </button>
      </form>
    </div>
  );
}