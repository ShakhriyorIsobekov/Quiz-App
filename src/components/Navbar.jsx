// react imports
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const toggleMode = () => {
  return localStorage.getItem("dark-mode") || "light";
};

function Navbar() {
  const data = useParams();
  const [theme, setTheme] = useState(toggleMode());

  // theme toggle funtion
  const changeThemeTogle = () => {
    const newTheme = theme == "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("dark-mode", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="header-container container">
        <div className="">
          {data.quiz && (
            <Link className="header-logo" to="/">
              <figure>
                <img
                  src={`../assets/icon-${data.quiz.toLowerCase()}.svg`}
                  alt={`${data.quiz} icon`}
                />
              </figure>
              <span>{data.quiz}</span>
            </Link>
          )}
        </div>
        <div>
          <div className="dark-btn" onClick={changeThemeTogle}>
            <input type="checkbox" checked={theme == "dark-mode"} readOnly />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
