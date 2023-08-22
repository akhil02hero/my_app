import { useLocation } from "react-router-dom";

export function IsURLEndingWith(endString) {
  const location = useLocation();
  const currentURL = location.pathname;
  return currentURL.endsWith(endString);
}
