import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import db from "../../db/db.json";
import db_eng from "../../db/dbeng.json";

const Signs = () => {
  const { i18n } = useTranslation();
  const isTajik = i18n.language === "tj";
  const { roadSigns } = isTajik ? db : db_eng;

  const allSigns = Object.entries(roadSigns).flatMap(([category, signs]) =>
    signs.map((sign) => ({ ...sign, category }))
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSign, setSelectedSign] = useState(null);

  const handleFilterItems = (e: string) => {
    setSearchTerm(e);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSignClick = (sign: any) => {
    setSelectedSign(sign);
  };

  const handleCloseModal = () => {
    setSelectedSign(null);
  };

  const categories = Object.keys(roadSigns);

  const filteredIcons = allSigns.filter((icon) => {
    const matchesCategory =
      selectedCategory === "" || icon.category === selectedCategory;
    const matchesSearch =
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="mt-5 px-4 max-w-7xl mx-auto">
      <div className="prose prose-orange max-w-none bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8 border border-orange-100">
        <p className="text-gray-700 leading-relaxed">
          {isTajik ? (
            <>
              Дар ин рӯйхат аломатҳои роҳ дар Тоҷикистон истифода мешаванд.
              Аломатҳои роҳ дар Тоҷикистон аз бисёр ҷиҳат ба аломатҳои роҳе, ки
              дар Русия ва кишварҳои ИДМ (Озарбойҷон, Арманистон, Беларус,
              Қазоқистон, Қирғизистон, Узбакистон) истифода мешаванд, шабоҳат
              доранд, зеро Тоҷикистон то фурӯпошии он дар соли 1991 дар ҳайати
              Иттиҳоди Шӯравӣ буд. Аломатҳо бо Қоидаҳои ҳаракат дар роҳ, ки бо
              Қарори Ҳукумати Ҷумҳурии Тоҷикистон аз "29" июни соли 2017, № 323
              "Қоидаҳои ҳаракат дар роҳ"[1], Қонуни Ҷумҳурии Тоҷикистон аз 17
              майи соли 2018, № 1533 "Дар бораи қоидаҳои ҳаракат дар роҳ"[2].
              Қоидаҳои истифода ва истеҳсоли аломатҳо дар стандарти
              байнидавлатии ГОСТ 32945-2014 муайян карда шудаанд.
            </>
          ) : (
            <>
              This list contains road signs used in Tajikistan. The road signs
              in Tajikistan are in many ways similar to those used in Russia and
              CIS countries (Azerbaijan, Armenia, Belarus, Kazakhstan,
              Kyrgyzstan, Uzbekistan), as Tajikistan was part of the Soviet
              Union until its dissolution in 1991. The signs are regulated by
              the Rules of the Road, approved by the Government of the Republic
              of Tajikistan on June 29, 2017, No. 323 "Rules of the Road"[1],
              and the Law of the Republic of Tajikistan of May 17, 2018, No.
              1533 "On Traffic Rules"[2]. The standards for the use and
              production of signs are defined in the interstate standard GOST
              32945-2014.
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-10 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl shadow-sm border border-orange-100">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-orange-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isTajik
            ? "Ҷустуҷӯ ва филтр кардани аломатҳо"
            : "Search and Filter Signs"}
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          {/* Search Bar */}
          <motion.div
            className="relative flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="search"
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-orange-400/70 shadow-sm bg-white"
                placeholder={isTajik ? "Ҷустуҷӯ..." : "Search here..."}
                onChange={(e) => handleFilterItems(e.target.value)}
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Category Selector */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="relative">
              <select
                className="appearance-none w-full px-4 py-3 pr-10 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-700 shadow-sm"
                onChange={handleCategoryChange}
              >
                <option value="">
                  {isTajik ? "Ҳама категорияҳо" : "All Categories"}
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* No signs found */}
      {filteredIcons.length === 0 ? (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex flex-col items-center">
            <svg
              className="h-16 w-16 text-orange-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xl text-gray-600">
              {isTajik ? "Нишона ёфт нашуд..." : "No signs found..."}
            </p>
            <p className="text-gray-500 mt-2">
              {isTajik
                ? "Лутфан матни ҷустуҷӯ ё категорияро тағйир диҳед"
                : "Please try a different search term or category"}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
          {filteredIcons.map((icon, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-100 cursor-pointer group"
              onClick={() => handleSignClick(icon)}
              whileHover={{ y: -5 }}
            >
              <div className="p-5 pb-0 flex justify-center">
                <div className="w-32 h-32 flex items-center justify-center bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                  <img
                    src={icon.image}
                    alt={icon.name}
                    className="w-24 h-24 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 pt-3 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-orange-800 mb-3 text-center">
                  {icon.name}
                </h3>
                <p className="text-gray-600 text-sm flex-1">
                  {icon.description.length > 120
                    ? icon.description.slice(0, 120) + "..."
                    : icon.description}
                </p>
                <div className="mt-4 pt-3 border-t border-orange-100">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-200 text-black">
                    {icon.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedSign && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            layoutId={`card-${selectedSign.name}`}
          >
            <div className="p-6 pb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-2 text-center">
                {selectedSign.name}
              </h2>
              <div className="text-center text-sm text-orange-600 mb-6">
                {selectedSign.category}
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 flex items-center justify-center bg-orange-50 rounded-xl">
                  <img
                    src={selectedSign.image}
                    alt={selectedSign.name}
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex-1 overflow-y-auto">
              <div className="prose prose-orange max-w-none">
                <p className="text-gray-700">{selectedSign.description}</p>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-end border-t border-orange-100">
              <button
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                onClick={handleCloseModal}
              >
                {isTajik ? "Бастан" : "Close"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Signs;
