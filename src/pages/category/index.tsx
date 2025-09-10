import { memo } from "react";
import CategoryView from "../category-view";

const Category = () => {
  return (
    <section className="pt-[100px] px-[50px]">
      <CategoryView />
    </section>
  );
};

export default memo(Category);
