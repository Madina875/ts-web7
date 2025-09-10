import { memo } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout";
import Products from "./products";
import NotFound from "./not-found";
import Home from "./home";
import Category from "./category";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default memo(AppRouter);
