import { memo } from "react";
import header from "../assets/header.png";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${header})` }}
      className=" w-[100%] h-[400px] pt-[400px] border-black bg-center"
    ></div>
  );
};

export default memo(Hero);
