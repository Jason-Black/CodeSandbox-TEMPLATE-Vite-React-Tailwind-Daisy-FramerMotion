import React, { useState, useEffect } from "react";

function ThemeSwitcher3() {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="theme-switcher flex flex-col items-center gap-4 p-4 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Switch Theme</h2>

      {/* Styled with DaisyUI */}
      <select
        value={theme}
        onChange={handleThemeChange}
        className="select select-primary w-full max-w-xs"
      >
        {themes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>

      {/* DaisyUI Button for user feedback */}
      <button className="btn btn-primary btn-wide mt-4">
        Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>
    </div>
  );
}

export default ThemeSwitcher3;
