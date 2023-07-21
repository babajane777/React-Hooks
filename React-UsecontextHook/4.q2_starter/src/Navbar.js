import { useContext } from "react";
import { useState } from "react";
import { langcontext } from "./languageContext";
import { themecontext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const[themeFlag, setthemeFlag]= useState(true)
  
  const {theme,setTheme} = useContext(themecontext);
  const {language, setLanguage }= useContext(langcontext);

  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
      setthemeFlag(true);
    } 
    if (theme == "light") {
      setTheme("dark");
      setthemeFlag(false);
    } 
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={() => handleTheme()} > {themeFlag ? "dark" : "light"} theme </button>
        <span> {language} </span>
      </div>
    </div>
  );
};
