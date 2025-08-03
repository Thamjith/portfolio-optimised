import { useState } from "react";
import "./Header.scss";
import Typography from "../Typography/Typography";

const Header = () => {
  const [isStriked, setIsStriked] = useState(false);

  const toggleStrike = () => setIsStriked(!isStriked);
  return (
    <header className="header">
      <a href="/" className="header__title">
        <Typography variant="heading-03">Thamjith Thaha</Typography>
      </a>
      <button
        className={`header__theme ${isStriked ? "header__theme--strike" : ""}`}
        aria-pressed={isStriked}
        onClick={toggleStrike}
      >
        <Typography variant="body-02">Light</Typography>
      </button>
    </header>
  );
};

export default Header;
