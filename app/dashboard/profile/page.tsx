"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/lib/axios";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const token = Cookies.get("token");
    let userId = Cookies.get("userId");
    if (typeof userId !== "undefined") {
      userId = atob(userId);
    }

    axiosInstance
      .get(`userdata/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (res.data.status === 200 || res.data.status === 201) {
          setUserData(res.data.user);
        } else {
          setError(res.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    router.push("/");
  };

  console.log(userData);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="flex flex-col w-full h-full">
            <div className="rounded-xl relative">
              <Image src={"/profile-bg.jpeg"} alt="Profile Background" width={0} height={0} sizes="100vh" className="w-full lg:h-48 md:h-44 sm:h-40 h-36 object-cover object-top relative rounded-t-2xl" />
              <Image
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-48 md:w-44 sm:w-40 w-32 lg:h-48 md:h-44 sm:h-40 h-32 rounded-full object-cover object-center z-30"
                src="/default-profile.jpeg"
                alt="user photo"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>

            <div className="h-full flex flex-col items-center justify-end xl:gap-36 lg:gap-[9.3rem] md:gap-44 sm:gap-52 gap-64">
              <div className="flex flex-col justify-center items-center">
                {/* @ts-ignore */}
                <h1 className="font-bold text-neutral-900 lg:text-4xl md:text-3xl sm:text-2xl text-xl">{userData?.name}</h1>
                {/* @ts-ignore */}
                <h4 className="text-neutral-500 lg:text-base md:text-sm text-xs">{userData?.UserDatum.Division.name}</h4>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
                className="bg-primary-500 text-primary-50 px-4 py-3 rounded-lg font-bold hover:bg-primary-400 transition lg:text-base text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
