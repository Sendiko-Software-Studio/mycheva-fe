import AddIcon from '@mui/icons-material/Add';
import React from 'react';

interface FABProps {
  onClick: () => void;
}

const CalendarFAB: React.FC<FABProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="p-4 rounded-2xl drop-shadow-lg hover:bg-orange-600 active:scale-95 transition-all duration-200 bg-primary-500 w-fit text-white flex flex-row justify-center items-center gap-2 w-full">
        <AddIcon /> 
        <p className="font-bold text-lg">Buat Pertemuan</p>
      </button>
    </>
  )
}

export default CalendarFAB;