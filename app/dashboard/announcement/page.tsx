import AnnouncementCard from "@/app/components/announcement/card";  
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcements"
}

export default function AnnouncementHome() {

  const announcements = []

  return (
    <div className="h-screen gap-8">
      {Array.from({ length: 5 }, (_, i) => (
        <AnnouncementCard /> 
      ))}
    </div>
  );
}
