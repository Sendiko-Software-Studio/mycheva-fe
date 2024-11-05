import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

export default function MeetingCard() {

  const [isExpanded, setExpanded] = useState(false);

  const handleExpaded = () => {
    setExpanded(!isExpanded);
  }

  return (
      <div className="flex flex-row p-4 h-fit w-100 rounded-xl gap-4 justify-start items-center">
        <p className="text-lg font-semibold text-gray-500">19</p>     
        <p className="text-lg font-normal text-gray-500">APR, Fri</p>
        <div className="flex flex-col w-full">
          <div className="flex flex-col bg-primary-300 p-4 rounded-xl w-full">
            <div className="flex flex-row justify-between w-full">
              <div className="size-6 bg-primary-500 rounded-md"/>
              <p className="text-gray-700">10.00</p>
              <p>Meet 1 Android Development</p>
              <button onClick={handleExpaded}>
                <ArrowDropDownIcon/>
              </button>
            </div>
            <div className="flex flex-row pt-4">
              <p>Title</p>
              <p>Lorem ipsum dolor si amet</p>
            </div>
          </div>
        </div>
      </div>
  )
}