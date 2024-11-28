import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      navigate("/");
    }, 2000);
  }, [pathname]);
  return (
    <div className="h-[300px] md:h-[450px] flex flex-col justify-items-center items-center justify-center">
      <h1 className="text-3xl text-center">
        Ops Not Found this path{" "}
        <span className="text-orange-400">"{pathname}"</span>
      </h1>
      <span className="text-2xl mt-5 text-orange-500">(-_-)</span>
    </div>
  );
};

export default NotFound;
