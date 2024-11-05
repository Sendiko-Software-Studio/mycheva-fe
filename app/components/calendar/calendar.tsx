import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface CalendarProps {
  // Add any additional props you might need, e.g., initialDate, highlightedDates
}

const Calendar: React.FC<CalendarProps> = ({ }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const getMonthName = (month: number): string => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  };

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDayOfWeek = (date: Date): number => {
    return date.getDay();
  };

  const renderCalendar = (): JSX.Element => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getDayOfWeek(new Date(year, month, 1));

    const rows: JSX.Element[] = [];
    let day = 1 - firstDayOfMonth;

    for (let i = 0; i < 6; i++) {
      const row: JSX.Element[] = [];
      for (let j = 0; j < 7; j++) {
        const isCurrentMonth = day >= 1 && day <= daysInMonth;
        const isHighlighted = [10, 19].includes(day); // Replace with your desired highlighted dates

        row.push(
          <td key={i * 7 + j} className={isCurrentMonth ? 'current-month' : 'other-month'}>
            {isCurrentMonth ? (
              <span className={isHighlighted ? 'highlighted' : ''}>{day}</span>
            ) : (
              ''
            )}
          </td>
        );
        day++;
      }
      rows.push(<tr className='text-center'>{row}</tr>);
    }

    return (
      <table className='table-auto border-collapse'>
        <thead>
          <tr>
            <th className='px-4 py-2 text-left'>S</th>
            <th className='px-4 py-2 text-left'>M</th>
            <th className='px-4 py-2 text-left'>T</th>
            <th className='px-4 py-2 text-left'>W</th>
            <th className='px-4 py-2 text-left'>T</th>
            <th className='px-4 py-2 text-left'>F</th>
            <th className='px-4 py-2 text-left'>S</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return (
    <div className="bg-white p-4 w-fit">
      <div className="flex flex-row justify-between items-center mb-4 gap-4">
        <span className="text-lg">{getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}</span>
        <button onClick={handlePrevMonth}>
          <ExpandMoreIcon />
        </button>
        <button onClick={handleNextMonth}>
          <ExpandLessIcon />
        </button>
      </div>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;