import { memo } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

type Category = {
  id: number;
  name: string;
  title: string;
  price: number;
  images: string[];
};
const ProductsDetail = () => {
  const { id } = useParams();
  const { data } = useFetch<Category>(`/products/${id}`);
  return (
    <div>
      <Header />
      <div className="border border-red text-black w-[100%] h-[100%] flex items-center justify-center">
        <div className="text-black h-[400px] w-[400px] border mt-[100px]">
          <h3 className="text-2xl">{data?.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductsDetail);
