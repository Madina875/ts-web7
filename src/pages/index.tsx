import { memo } from "react";
import { Route, Routes } from "react-router";
import User from "./user";
import MainLayout from "./layout";
import Products from "./products";
import NotFound from "./not-found";
import Home from "./home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default memo(AppRouter);
