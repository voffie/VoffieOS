import { useState } from "react";

export const Header = () => {
  const [date, setDate] = useState(new Date());
  setInterval(() => {
    setDate(new Date());
  }, 1000);
  return (
    <nav className="absolute top-0 left-0 right-0 h-7 bar-bg flex items-center justify-center">
      <p>{date.toUTCString()}</p>
    </nav>
  );
};
