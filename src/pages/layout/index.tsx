import { memo } from "react";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
// import { useLocation } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className=" bg-black min-h-[1500px]">
        <Outlet />
      </main>
    </>
  );
};

export default memo(MainLayout);
