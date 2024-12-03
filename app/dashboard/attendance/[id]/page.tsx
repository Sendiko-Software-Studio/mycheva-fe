"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/app/lib/axios";
import QRCode from "react-qr-code"
import formatDate from "@/app/lib/dateFormatter";
import Link from "next/link";

export default function Attendance(
  { params }: { params: { id: string } }
) {

  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    const token = Cookies.get("token");
    const userId = Cookies.get('userId');
    var decodedId = '';
    if (userId != null) {
      decodedId = atob(userId);
    }
    if (params.id) {
      axiosInstance.get(
        `event/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then((res) => {
          console.log(res.data)
          setLoading(false);
          setEvent(res.data.event)
        }
      ).catch((error: any) => {
          setLoading(false);
          console.log(error.message);
        }
      )
    }
  }, [(params).id]);

  return (
    <div className="flex flex-col justify-start items-start">
      <Link className="p-2 text-primary-500 border-2 border-primary-500 hover:text-white hover:bg-primary-500 rounded-lg" href={'/dashboard/meetings'} >{`<- Kembali`}</Link>
      {loading && (<p className="p-2 rounded-md bg-blue-500 w-full mt-8 text-white">Loading</p>)}
      {!loading && (
        <div className="w-full h-full flex flex-col justify-center items-center gap-8">
        {/* @ts-ignore */}
        <h1 className="text-4xl">{event.name}</h1>
        {/* @ts-ignore */}
        <h1 className="font-bold text-lg">{formatDate(event.date)}</h1>
        <QRCode
          value={`${(params.id)}`}
        />
      </div>
      )}
    </div>
  )
}