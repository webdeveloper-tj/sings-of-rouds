import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-y-6">
        {/* Development Section */}
        <div className="px-2 md:w-[750px] xl:w-[1160px] md:mx-auto">
          <h1 className="text-3xl border-l-2 border-orange-600 pl-2">
            {t("about.development.title")}
          </h1>
          <div className="flex flex-col gap-y-4 my-4 pl-2">
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.development.developers")}:{" "}
              {t("about.development.names", { returnObjects: true }).map(
                (name: string) => (
                  <span
                    key={name}
                    className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {name}
                  </span>
                )
              )}
            </span>
            <span className="border-l-2 border-orange-600 pl-2">
              {t("about.development.course")}:{" "}
              <span className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600">
                {t("about.development.courseNumber")}
              </span>
            </span>
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.development.group")}:{" "}
              {t("about.development.groupName", { returnObjects: true }).map(
                (word: string) => (
                  <span
                    key={word}
                    className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {word}
                  </span>
                )
              )}
            </span>
          </div>
        </div>

        {/* Supervisor Section */}
        <div className="px-2 md:w-[750px] xl:w-[1160px] md:mx-auto">
          <h1 className="text-3xl border-l-2 border-orange-600 pl-2">
            {t("about.supervisor.title")}
          </h1>
          <div className="flex flex-col gap-y-4 my-4 pl-2">
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.supervisor.supervisor")}:{" "}
              {t("about.supervisor.name", { returnObjects: true }).map(
                (name: string) => (
                  <span
                    key={name}
                    className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {name}
                  </span>
                )
              )}
            </span>
            <span className="border-l-2 border-orange-600 pl-2">
              {t("about.supervisor.titleOfDegree")}:{" "}
              {t("about.supervisor.degrees", { returnObjects: true }).map(
                (degree: string) => (
                  <span
                    key={degree}
                    className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {degree}
                  </span>
                )
              )}
            </span>
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.supervisor.profession")}:{" "}
              {t("about.supervisor.professionDetails", {
                returnObjects: true,
              }).map((word: string) => (
                <span
                  key={word}
                  className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                >
                  {word}
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* App Info Section */}
        <div className="px-2 md:w-[750px] xl:w-[1160px] md:mx-auto">
          <h1 className="text-3xl border-l-2 border-orange-600 pl-2">
            {t("about.app.title")}
          </h1>
          <div className="flex flex-col gap-y-4 my-4 pl-2">
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.app.language")}:{" "}
              {t("about.app.languages", { returnObjects: true }).map(
                (lang: string) => (
                  <span
                    key={lang}
                    className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {lang}
                  </span>
                )
              )}
            </span>
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.app.framework")}:{" "}
              {t("about.app.frameworks", { returnObjects: true }).map(
                (framework: string) => (
                  <span
                    key={framework}
                    className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {framework}
                  </span>
                )
              )}
            </span>
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.app.styles")}:{" "}
              {t("about.app.styleTechnologies", { returnObjects: true }).map(
                (style: string) => (
                  <span
                    key={style}
                    className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {style}
                  </span>
                )
              )}
            </span>
            <span className="border-l-2 border-orange-600 pl-2 flex flex-col gap-y-1">
              {t("about.app.description")}:{" "}
              {t("about.app.descriptionText", { returnObjects: true }).map(
                (paragraph: string, index: number) => (
                  <span
                    key={index}
                    className="border-l-2 border-orange-600 px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600"
                  >
                    {paragraph}
                  </span>
                )
              )}
            </span>
            <span className="border-l-2 border-orange-600 pl-2 flex flex-wrap gap-y-1">
              {t("about.app.attention")}:{" "}
              <span className="px-1 ml-1 rounded-[2px] bg-orange-100 text-orange-600">
                {t("about.app.attentionText")}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
