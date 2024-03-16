import React, { createContext, useState } from 'react';

export const DateContext = createContext();

const DateProvider = ({ children }) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedEventDetails, setSelectedEventDetails] = useState(null);

  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate, selectedEventDetails, setSelectedEventDetails }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
