"use client";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axiosInstance from "@/app/lib/axios";
import Cookies from "js-cookie";
import QRCode from "react-qr-code";

export default function AttendancePage() {
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    const token = Cookies.get("token");
    if (id) {
      axiosInstance.get(
        `attendance/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then((res) => {
        console.log(res.data)})
        .catch((error: any) => {
          console.log(error.message);})
    }
  }, [id]);
  
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/*<QRCode*/}
      {/* value={id}*/}
      {/* size={256}*/}
      {/*/>*/}
      <h1 className="text-4xl font-bold">{id}</h1>
    </div>
  )
}