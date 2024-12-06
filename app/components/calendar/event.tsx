"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MeetingCard({
  title,
  time,
  date,
  id,
}: {
  title: string;
  time: string;
  date: string;
  id: string;
}) {
  const router = useRouter();
  const [isExpanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(!isExpanded);
  };

  const handleClick = () => {
    router.push(`/dashboard/attendance/${id}`);
  };

  const datePart = date.split("T")[0]; // "2024-12-12"

  const [year, month, day] = datePart.split("-");

  const shortMonth = new Date(Number(year), parseInt(month) - 1).toLocaleString(
    "en-US",
    {
      month: "short",
    },
  );
  const monthDay = `${shortMonth} ${day}`;

  return (
    <div className="flex flex-row p-4 h-fit w-full rounded-xl gap-4 justify-start items-center">
      <p className="text-lg font-semibold text-gray-500">{monthDay}</p>
      <div className="flex flex-col w-full">
        <div className="flex flex-col bg-primary-300 p-4 rounded-xl w-full">
          <div className="flex flex-row justify-between gap-8 w-full">
            <div className="flex flex-row gap-4">
              <div className="size-6 bg-primary-500 rounded-md" />
              <p className="text-gray-700">{time}</p>
            </div>
            <p className="w-full text-align-start">{title}</p>
            <button onClick={handleExpanded}>
              <ArrowDropDownIcon />
            </button>
          </div>
          {isExpanded && (
            <Link
              href={`attendance/${id}`}
              className="mt-2 text-sm rounded-xl p-2 bg-transparent border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white"
            >
              Buat Kehadiran
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
