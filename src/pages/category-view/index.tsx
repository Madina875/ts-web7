import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  image: string;
};

const CategoryView = () => {
  const navigate = useNavigate();
  const { data } = useFetch<Category[]>("/categories");
  return (
    <>
      <div className="border border-white"></div>
      <h3 className="text-white italic text-4xl">Categories</h3>
      <div className="text-white grid grid-cols-5 mt-[70px] text-center gap-[20px] p-[10px]">
        {data?.map((e) => (
          <div
            className="border border-white grid gap-[20px] p-[10px]"
            key={e.id}
          >
            <img
              onClick={() => navigate(`/category/${e.id}`)}
              src={e.image}
              alt=""
            />
            <h2>{e.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(CategoryView);
