import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  title: string;
  price: number;
  images: string[];
};

const ProductsView = () => {
  const navigate = useNavigate();
  const { data } = useFetch<Category[]>("/products");
  return (
    <>
      <div className="border border-white"></div>
      <h3 className="text-white italic text-4xl">Products</h3>
      <div className="text-white grid grid-cols-5 mt-[70px] text-center gap-[20px] p-[10px]">
        {data?.map((e) => (
          <div
            className="border border-white grid gap-[20px] p-[10px]"
            key={e.id}
          >
            <img
              onClick={() => navigate(`/products/${e.id}`)}
              src={e.images[0]}
              alt=""
            />
            <h2>{e.title}</h2>
            <strong>{e.price}$</strong>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(ProductsView);
