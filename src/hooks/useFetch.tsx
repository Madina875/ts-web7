import { useEffect, useState } from "react";
import { api } from "../api";

export const useFetch = (endpoint: string) => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    api.get(endpoint).then((res: any) => setData(res.data));
  }, []);

  return { data };
};
