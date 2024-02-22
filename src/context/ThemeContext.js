// Theme Context

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [myTheme, setMyTheme] = useState("light");

  // !stateleri asagidaki gibi bir degiskene atayarakta paslayabilirdim
    // const values = { myTheme, setMyTheme }
    //  <ThemeContext.Provider value={values}>
    //   {children}
  // </ThemeContext.Provider>
  
  return (
    <ThemeContext.Provider value={{ myTheme, setMyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export default ThemeContextProvider;