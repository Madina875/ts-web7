import { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-black text-white shadow-md fixed">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <p
          onClick={() => navigate("/")}
          className="text-2xl font-bold tracking-wide cursor-pointer hover:text-blue-300"
        >
          LOGOO
        </p>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
