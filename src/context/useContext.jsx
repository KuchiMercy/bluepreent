/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import mentorsData from "../data/mentorsData";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};
export const AppProvider = ({ children }) => {
  const [mentors, setMentors] = useState(mentorsData);

  return (
    <AppContext.Provider value={{ mentors, setMentors }}>
      {children}
    </AppContext.Provider>
  );
};
