import React, { useState } from 'react';
import { timetableData, TimetableData } from '../data/timetableData';

const TimetableDisplay: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('A');
  const [selectedYear, setSelectedYear] = useState<string>('SE');
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const divisions = ['A', 'B', 'C', 'D'];
  const years = ['SE', 'TE', 'BE'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const getCurrentTimetable = () => {
    return timetableData[selectedDivision]?.[selectedYear]?.[selectedDay] || {};
  };

  const renderTimeSlot = (timeSlot: string, data: any) => {
    return (
      <tr key={timeSlot}>
        <td className="border px-4 py-2">{timeSlot}</td>
        <td className="border px-4 py-2">{data.subject}</td>
        <td className="border px-4 py-2">{data.teacher}</td>
        <td className="border px-4 py-2">{data.room}</td>
      </tr>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Division</label>
          <select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {divisions.map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Day</label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Teacher</th>
              <th className="border px-4 py-2">Room</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(getCurrentTimetable()).map(([timeSlot, data]) =>
              renderTimeSlot(timeSlot, data)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimetableDisplay; 