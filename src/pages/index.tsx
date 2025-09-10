import { memo } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout";
import Products from "./products";
import NotFound from "./not-found";
import Home from "./home";
import Category from "./category";
import CategoryDetail from "./category-detail";
import ProductsDetail from "./products-detail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/category/:id" element={<CategoryDetail />} />
      <Route path="/products/:id" element={<ProductsDetail />} />
    </Routes>
  );
};

export default memo(AppRouter);
