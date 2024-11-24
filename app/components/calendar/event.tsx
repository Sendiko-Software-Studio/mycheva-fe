import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

export default function MeetingCard(
  {title, time, date}: {title: string, time: string, date: string}
) {

  const [isExpanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(!isExpanded);
  }
  
  const datePart = date.split("T")[0]; // "2024-12-12"

  const [year, month, day] = datePart.split("-");
  
  const shortMonth = new Date(Number(year), parseInt(month) - 1).toLocaleString("en-US", {
    month: "short",
  });
    const monthDay = `${shortMonth} ${day}`;

  return (
      <div className="flex flex-row p-4 h-fit w-100 rounded-xl gap-4 justify-start items-center">
        <p className="text-lg font-semibold text-gray-500">{monthDay}</p>
        <div className="flex flex-col w-full">
          <div className="flex flex-col bg-primary-300 p-4 rounded-xl w-full">
            <div className="flex flex-row justify-start gap-8 w-full">
              <div className="flex flex-row gap-4">
                <div className="size-6 bg-primary-500 rounded-md"/>
                <p className="text-gray-700">{time}</p>
              </div>
              <p>{title}</p>
              {/*<button onClick={handleExpanded}>*/}
              {/*  <ArrowDropDownIcon/>*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </div>
  )
}