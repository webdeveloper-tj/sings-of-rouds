import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-orange-500 h-52 flex justify-center items-center mt-5">
      <div>
        <h1 className="text-white text-3xl text-center">
          {t("about.development.names", { returnObjects: true }).map(
            (name: string) => (
              <span key={name}>{name} </span>
            )
          )}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
