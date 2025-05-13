import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col mt-5  gap-y-10 px-1">
      <div className="flex justify-center items-center ">
        <h1 className="text-center text-orange-700 text-4xl">{t("welcome")}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-blue-100">
        {/* Card 1: Description */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-slate-700 transition hover:shadow-lg hover:bg-blue-50">
          <img
            src="/chekmarker.png"
            alt="Checkmark icon"
            className="w-12 h-12 mb-4"
          />
          <p className="text-base leading-relaxed">{t("description")}</p>
        </div>
        {/* Card 2: Test */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-slate-700 transition hover:shadow-lg hover:bg-blue-50">
          <img
            src="/chekmarker.png"
            alt="Checkmark icon"
            className="w-12 h-12 mb-4"
          />
          <p className="text-base leading-relaxed">{t("test")}</p>
        </div>
        {/* Card 3: Learn (example extra card) */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-slate-700 transition hover:shadow-lg hover:bg-blue-50">
          <img
            src="/chekmarker.png"
            alt="Checkmark icon"
            className="w-12 h-12 mb-4"
          />
          <p className="text-base leading-relaxed">{t("learn")}</p>
        </div>{" "}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-slate-700 transition hover:shadow-lg hover:bg-blue-50">
          <img
            src="/chekmarker.png"
            alt="Checkmark icon"
            className="w-12 h-12 mb-4"
          />
          <p className="text-base leading-relaxed">{t("understand")}</p>
        </div>
      </div>

      <div className="container  flex justify-center items-center relative">
        <img src="../../public/image.png" alt="" className="w-[400px]" />
      </div>
      <div className=" xl:w-[1080px] flex flex-col items-center justify-center mx-auto bg-blue-100 p-6 break-words rounded-md text-slate-700 ">
        <h1 className="text-3xl mb-4">{t("check")}</h1>
        <p>{t("test")}</p>
      </div>
    </div>
  );
};

export default Home;
