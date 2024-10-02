import Image from "next/image";
import '@/app/(login)/styles.css'
import { poppins500, poppins700 } from "../theme/fonts";

export default function Home() {
  return (
    <div className="page m-0 p-0">
      <div className="left" />
      <div className="right bg-neutral-50">
        <div className="image-container">
          <Image src="/cheva.png" width={163} height={43} alt="logo cheva" />
        </div>
        <h1 className={`${poppins700.className} welcome`}>Selamat Datang!</h1>
        <p>Masukkan Username dan Password untuk mengakses akun!</p>

        <div className="form">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="username" placeholder="Masukkan Username"/>
        </div>
        <div className="form">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="username" placeholder="Masukkan Password"/>
        </div>
      </div>
    </div>
  );
}