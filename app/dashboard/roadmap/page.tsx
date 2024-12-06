"use client";
import { SetStateAction, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/app/lib/axios";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function RoadMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [options, setOptions] = useState<any[]>([]);
  const [roadmaps, setRoadmaps] = useState<any[]>([]);

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

  useEffect(() => {
    const token = Cookies.get("token");
    setLoading(true);
    axiosInstance
      .get("/roadmap", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setRoadmaps(res.data.roadmaps);
        }
        console.log(res.data);
      })
      .catch((error: any) => console.log(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {loading && (
        <p className="bg-info p-4 m-4 rounded-lg text-white">loading...</p>
      )}
      {error && (
        <p className="bg-error p-4 m-4 rounded-lg text-white">{error}</p>
      )}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between items-center mb-4">
          <h1 className="font-semibold text-xl">Road Map</h1>
          <Link
            href="roadmap/post"
            className="p-4 rounded-2xl drop-shadow-lg hover:bg-orange-600 active:scale-95 transition-all duration-200 bg-primary-500 text-white flex flex-row justify-center items-center gap-2 w-fit"
          >
            <AddIcon />
            <p className="font-bold text-lg">Buat Roadmap</p>
          </Link>
        </div>
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
    </div>
  );
}
