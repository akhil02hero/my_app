import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { HOME_BG_COLOR } from "../context/AppConstants";

const BackgroundChanger = () => {
  const location = useLocation();

  useEffect(() => {
    // Change the body background color based on the URL pathname
    const path = location.pathname;
    let backgroundColor = HOME_BG_COLOR;

    if (path === "/" || path === "/fitnesscalc") {
      backgroundColor = HOME_BG_COLOR;
    } else {
      backgroundColor = "black";
    }
    document.body.style.backgroundColor = backgroundColor;
  }, [location.pathname]);

  return null;
};

export default BackgroundChanger;
