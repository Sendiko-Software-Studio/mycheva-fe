"use client";

import { useState } from "react";

interface TableListAttendanceProps {
  name: string;
  photoUri: string;
  faculty: string;
  major: string;
  division: string;
  attendanceStatus: string;
  username: string;
}

export default function TableListAttendance({ name, photoUri, faculty, major, division, attendanceStatus, username }: TableListAttendanceProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <tr className="bg-white relative">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
        <div className="flex items-center gap-3">
          <img src={photoUri} alt="Photo Profile" className="max-w-12 aspect-square rounded-full" />
          <div className="flex flex-col justify-start items-start gap-0">
            <h4 className="lg:text-base sm:text-sm text-xs">{username}</h4>
            <h4 className="text-neutral-700 lg:text-base sm:text-sm text-xs">{name}</h4>
          </div>
        </div>
      </th>
      <td className="px-6 py-4">{faculty}</td>
      <td className="px-6 py-4">{major}</td>
      <td className="px-6 py-4">{division}</td>
      <td className="px-6 py-4">
        <button
          id="dropdownDefaultButton"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-white bg-primary-500 hover:bg-primary-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 w-28 text-center inline-flex items-center justify-center gap-2"
          type="button"
        >
          {attendanceStatus == "present" ? "Hadir" : attendanceStatus == "absent" ? "Alpha" : attendanceStatus == "sick" ? "Sakit" : attendanceStatus == "excused" ? "Izin" : "Pilih"}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {/* Dropdown Attendance */}
        <div id="dropdown" className={`z-10 ${isDropdownOpen ? "block" : "hidden"} bg-primary-500 absolute divide-y divide-primary-400 rounded-lg shadow w-28`}>
          <ul className="py-2 text-sm text-white " aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className={`block px-4 py-2 ${attendanceStatus == "present" ? "bg-primary-400" : "hover:bg-primary-400"}`}>
                Hadir
              </a>
            </li>
            <li>
              <a href="#" className={`block px-4 py-2 ${attendanceStatus == "absent" ? "bg-primary-400" : "hover:bg-primary-400"}`}>
                Alpha
              </a>
            </li>
            <li>
              <a href="#" className={`block px-4 py-2 ${attendanceStatus == "excused" ? "bg-primary-400" : "hover:bg-primary-400"}`}>
                Izin
              </a>
            </li>
            <li>
              <a href="#" className={`block px-4 py-2 ${attendanceStatus == "sick" ? "bg-primary-400" : "hover:bg-primary-400"}`}>
                Sakit
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}
