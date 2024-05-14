"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import React, { useState } from 'react';
import Rodape from "../Components/Rodape";




const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode)
    
};
  return (
    
    <html lang="pt-br">
      
      <body className={`${inter.className} ${darkMode ? "dark" : " " }`}>
         <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        {children}
        <Rodape/>
        </body>
    </html>
  );
}
