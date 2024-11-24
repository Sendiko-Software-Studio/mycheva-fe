"use client";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/app/lib/axios";
import {log} from "node:util";

export default function PostEvent() {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [divisions, setDivisions] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    description: "",
    meetingType: "online",
    division: ""
  });
  
  const [formErrors, setFormErrors] = useState({
    title: false,
    location: false,
    date: false,
    time: false,
    description: false,
    meetingType: false,
  });
  
  useEffect(() => {
    const token = Cookies.get("token")
    setLoading(true);
    axiosInstance.get(
      'division',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((res) => {
      if (res.status == 200) {
        setDivisions(res.data.divisions);
      }
    }).catch((error: any) =>
        console.log(error.message)
      )
      .finally(() =>
        setLoading(false)
      )
  }, [])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = Cookies.get('token');
      const userId = Cookies.get('userId');
      let decodedId = '';
      
      axiosInstance.post(
        "event",
        {
          "name": formData.title,
          "desc": formData.description,
          "type": formData.meetingType,
          "details": formData.location,
          "date": formData.date,
          "time": formData.time,
          "divisionId": formData.division,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then((res) => {
        console.log(res);
        setLoading(false);
      })
      
    } catch (error: any) {
      console.log(error.message)
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col lg:mx-24 md:mx-16 sm:mx-0 gap-8">
      <h1 className="font-bold text-4xl">Tambahkan Jadwal Baru</h1>
      <form
        method="post"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row gap-16">
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Judul</h1>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
              placeholder="Judul Pertemuan"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Lokasi/Link</h1>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
              placeholder="Lokasi Pertemuan"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-row gap-16">
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Tanggal</h1>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Jam</h1>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-row gap-16">
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Deskripsi</h1>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
              placeholder="Tentang Pertemuan"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Pertemuan</h1>
            <select
              name="meetingType"
              value={formData.meetingType}
              onChange={handleChange}
              className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
            >
              <option value="" disabled>
                Select a meeting type
              </option>
              <option value="online">Online</option>
              <option value="onsite">Onsite</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col w-full">
          <h1 className="font-semibold">Divisi</h1>
          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
          >
            <option value="" disabled>
              Select a division
            </option>
            {divisions.map((division) => (
              <option key={division.id} value={division.id}>
                {division.name}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="button"
          className={`text-lg py-2 px-4 shadow-md w-full rounded ${
            loading
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-primary-500 hover:bg-primary-700 text-white"
          }`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Tambahkan"}
        </button>
      </form>
    </div>
  )
}