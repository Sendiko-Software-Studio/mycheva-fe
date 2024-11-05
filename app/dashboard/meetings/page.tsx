"use client";
import Calendar from "@/app/components/calendar/calendar";
import MeetingCard from "@/app/components/calendar/event";
import CalendarFAB from "@/app/components/calendar/fab";

export default function Meetings() {

  const handleNewEvent = () => {
    console.log()
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