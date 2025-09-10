import { memo } from "react";
import header from "../assets/header.png";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();

  let heightof = 400;
  if (location.pathname === "/users" || location.pathname === "/products") {
    heightof = 350;
  }
  return (
    <div
      style={{ backgroundImage: `url(${header})`, height: `${heightof}px` }}
      className="w-[100%] border-black bg-center"
    ></div>
  );
};

export default memo(Hero);
