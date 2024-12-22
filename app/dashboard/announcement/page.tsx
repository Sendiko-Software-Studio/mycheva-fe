"use client";
import AnnouncementCard from "@/app/components/announcement/card";
import axiosInstance from "@/app/lib/axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function AnnouncementHome() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axiosInstance.get("announcement", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        if (res.status === 200) {
          setAnnouncements(res.data.announcements);
          console.log(announcements);
        }
      } catch (error: any) {
        console.error("Error fetching:", error.message);
        setError(error.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen gap-16">
      {loading && (
        <p
          className={`transition-opacity duration-300 ease-in-out ${loading ? "opacity-100" : "opacity-0"} text-neutral-50 bg-primary-500 p-2 w-full rounded-lg`}
        >
          Loading...
        </p>
      )}
      {error && (
        <p
          className={`transition-opacity duration-300 ease-in-out ${error ? "opacity-100" : "opacity-0"} text-neutral-50 bg-error p-2 rounded-lg w-full`}
        >
          {error}
        </p>
      )}
      {announcements && announcements.length > 0 ? (
        announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            username={announcement.user.name}
            title={announcement.title}
            content={announcement.content}
            imageUrl={announcement.user.profileUrl}
            time={announcement.createdAt}
          />
        ))
      ) : (
        <div>No announcements available.</div>
      )}
    </div>
  );
}
