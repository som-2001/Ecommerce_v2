import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

export const ScrollReset = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Reset the scroll position
    console.log("Scrolled to top for:", location.pathname);
  }, [location.pathname]); // Run effect on location change

  return <Outlet />;
};
