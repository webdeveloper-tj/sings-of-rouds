import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timeout); // clean up
  }, [pathname, navigate]);

  return (
    <div className="h-[300px] md:h-[450px] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">
        {t("not_found_title")}{" "}
        <span className="text-orange-500">"{pathname}"</span>
      </h1>
      <p className="text-orange-400 text-lg mb-2">{t("not_found_redirect")}</p>
      <span className="text-2xl mt-5 text-orange-500">(-_-)</span>
    </div>
  );
};

export default NotFound;
