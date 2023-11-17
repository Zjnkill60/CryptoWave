"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext<{mode:string , setMode : (mode:string) => void} | undefined>(undefined)

export function ThemeProvider({children} : {children : React.ReactNode}) {
    let themeDefault
    if(typeof window !== "undefined") {
        themeDefault = localStorage.getItem("theme")
    }
    const [mode , setMode] = useState<string>(themeDefault || "light")

    const handleChangeTheme = () => {
        if(localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark")
        }else {
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        handleChangeTheme()
    },[mode])

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
     
          {children}
        </ThemeContext.Provider>
      );
    
}


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error("useTheme must be used within a  ThemeProvider");
    }
  
    return context;
}