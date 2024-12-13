"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export default function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      className="mode"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
}
