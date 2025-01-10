"use client";
import { SetStateAction, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/app/lib/axios";
import React from "react";

export default function PostRoadMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    const token = Cookies.get("token");
    setLoading(true);
    axiosInstance
      .get("division", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          setOptions(res.data.divisions);
        }
      })
      .catch((error: any) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  const handlePost = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    const token = Cookies.get("token");
    axiosInstance
      .post(
        "roadmap",
        {
          title: title,
          desc: desc,
          divisionId: selectedOption
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status == 201) {
          console.log("res status: " + res.status);
          console.log({ title: title, desc: desc });
          setLoading(false);
        }
      })
      .catch((error: any) => console.error(error.message));
  };

  return (
    <form
      className="flg:mx-24 md:mx-16 sm:mx-0 flex flex-col gap-8"
      onSubmit={handlePost}
    >
      <h1 className="font-bold text-4xl">Tambahkan Jadwal Baru</h1>
      <div className="flex flex-row w-full gap-4">
        <input
          className="border-2 border-neutral-500 w-full p-4 rounded-md focus:border-primary-500 focus:outline-none focus:ring-0"
          type="text"
          name="title"
          id="title"
          placeholder="Masukkan Judul RoadMap"
          value={title}
          onChange={(value) => setTitle(value.target.value)}
        />
        <select
          name="division"
          value={selectedOption}
          onChange={handleChange}
          className="border-2 border-neutral-300 text-lg p-4 rounded-md w-full"
        >
          <option value="" disabled>
            Select a division
          </option>
          {options.map((division) => (
            <option key={division.id} value={division.id}>
              {division.name}
            </option>
          ))}
        </select>
      </div>

      <input
        className="border-2 border-neutral-500 w-full p-4 rounded-md focus:border-primary-500 focus:outline-none focus:ring-0"
        type="text"
        name="desc"
        id="desc"
        placeholder="Masukkan Deskripsi Materi"
        value={desc}
        onChange={(value) => setDesc(value.target.value)}
      />
      <button
        type="submit"
        className="text-neutral-50 bg-primary-500 w-full py-4 rounded-lg hover:bg-primary-700 focus:outline-primary-900"
      >
        Tambah
      </button>
    </form>
  );
}
