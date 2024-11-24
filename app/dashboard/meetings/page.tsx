"use client";
import Calendar from "@/app/components/calendar/calendar";
import MeetingCard from "@/app/components/calendar/event";
import CalendarFAB from "@/app/components/calendar/fab";
import { usePathname, useRouter } from "next/navigation";

export default function Meetings() {

  const router = useRouter();
  const path = usePathname();

  const handleNewEvent = () => {
    router.push(path + '/post')
  }

	return (
		<div className="flex flex-row w-full">
      <div className="flex flex-col">
        <CalendarFAB onClick={handleNewEvent}/>
        <Calendar/>
      </div>
      <div className="flex flex-col w-full gap-2">
        <MeetingCard/>
        <MeetingCard/>
        <MeetingCard/>
      </div>
		</div>
	)
}