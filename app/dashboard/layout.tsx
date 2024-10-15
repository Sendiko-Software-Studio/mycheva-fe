"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/DashboardNavbar";
import Sidebar from "../components/sidebar/DashboardSidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="main-d-wrapper">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
