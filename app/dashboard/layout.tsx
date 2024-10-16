"use client";

import { useEffect, useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <div className="main-d-wrapper">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className={`${isSidebarOpen ? "ml-64" : ""} p-4 sm:p-6`}>{children}</main>
      </div>
    </>
  );
}
