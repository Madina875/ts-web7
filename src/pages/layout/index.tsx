import { memo } from "react";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero";
import Header from "../../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className=" bg-black h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default memo(MainLayout);
