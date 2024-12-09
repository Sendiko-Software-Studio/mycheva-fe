"use client";

import DefaultTable from "@/app/components/table/DefaultTable";
import TableListAttendance from "@/app/components/table/ListAttendance";
import Pagination from "@/app/components/table/TablePagination";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AttendanceData {
  name: string;
  photoUri: string;
  faculty: string;
  major: string;
  division: string;
  status: string;
  username: string;
}

export default function DetailAttendance({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<AttendanceData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const rowMenu = [{ menu: "Nama" }, { menu: "Fakultas" }, { menu: "Jurusan" }, { menu: "Divisi" }, { menu: "Status" }];

  // Dummy Data
  const dataAttendance: AttendanceData[] = [
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "present",
      username: "Dika",
    },
    {
      name: "Rahmah Hakim",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Ilmu Terapan",
      major: "D3 RPLA",
      division: "Android",
      status: "sick",
      username: "Rahman",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "excused",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "absent",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "present",
      username: "Dika",
    },
    {
      name: "Rahmah Hakim",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Ilmu Terapan",
      major: "D3 RPLA",
      division: "Android",
      status: "sick",
      username: "Rahman",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "excused",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "absent",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "present",
      username: "Dika",
    },
    {
      name: "Rahmah Hakim",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Ilmu Terapan",
      major: "D3 RPLA",
      division: "Android",
      status: "sick",
      username: "Rahman",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "excused",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "absent",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "present",
      username: "Dika",
    },
    {
      name: "Rahmah Hakim",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Ilmu Terapan",
      major: "D3 RPLA",
      division: "Android",
      status: "sick",
      username: "Rahman",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "excused",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "absent",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "present",
      username: "Dika",
    },
    {
      name: "Rahmah Hakim",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Ilmu Terapan",
      major: "D3 RPLA",
      division: "Android",
      status: "sick",
      username: "Rahman",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "excused",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "absent",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "present",
      username: "Dika",
    },
    {
      name: "Rahmah Hakim",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Ilmu Terapan",
      major: "D3 RPLA",
      division: "Android",
      status: "sick",
      username: "Rahman",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "excused",
      username: "Dika",
    },
    {
      name: "M Hendika P",
      photoUri: "https://placehold.co/500x500",
      faculty: "Fakultas Informatika",
      major: "S1 Informatika",
      division: "Web Dev",
      status: "absent",
      username: "Dika",
    },
  ];

  useEffect(() => {
    const results: AttendanceData[] = dataAttendance.filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.faculty.toLowerCase().includes(query.toLowerCase()) ||
        item.major.toLowerCase().includes(query.toLowerCase()) ||
        item.division.toLowerCase().includes(query.toLowerCase()) ||
        item.status.toLowerCase().includes(query.toLowerCase()) ||
        item.username.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredData(results);
    setCurrentPage(1);
  }, [query]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (query.length > 0 ? filteredData : dataAttendance).slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="flex justify-between">
        <button className="flex gap-4 items-center" onClick={() => router.back()}>
          <img src="/icon-arrow-left.svg" alt="Arrow Left" className="h-7" />
          <h4 className="lg:text-base text-sm text-primary-500">Kembali</h4>
        </button>

        <form className="max-w-md md:w-[400px]" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src="/icon-search.svg" alt="Search" className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-info focus:border-info"
              placeholder="Cari Akun"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div>
        <DefaultTable rowMenu={rowMenu}>
          {currentItems.map((data, index) => (
            <TableListAttendance key={index} name={data.name} photoUri={data.photoUri} faculty={data.faculty} major={data.major} division={data.division} attendanceStatus={data.status} username={data.username} />
          ))}
        </DefaultTable>
        <Pagination recordsTotal={query.length > 0 ? filteredData.length : dataAttendance.length} page={currentPage} link={`dashboard/attendance/${params.id}/detail`} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}
