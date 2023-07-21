import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { langcontext } from "./languageContext";
import {themecontext} from "./themeContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <div className={`App ${theme}`}>
      <themecontext.Provider value = {{theme, setTheme}}>
      <langcontext.Provider value = {{language, setLanguage}}>
      <Navbar />
      <Home />
      </langcontext.Provider>
      </themecontext.Provider>
    </div>
  );
}
