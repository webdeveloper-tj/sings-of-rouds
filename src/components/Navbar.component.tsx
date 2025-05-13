import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-lg">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 bg container">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-500">
          <NavLink to="/">Road Signs</NavLink>
        </span>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-orange-400"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-orange-100 rounded-lg bg-orange-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " block py-2 px-3 text-slate-700 rounded bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                    : "block py-2 px-3 text-slate-700 rounded hover:bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                }
                aria-current="page"
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/sings"}
                className={({ isActive }) =>
                  isActive
                    ? " block py-2 px-3 text-slate-700 rounded bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                    : "block py-2 px-3 text-slate-700 rounded hover:bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                }
              >
                {t("navbar.signs")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/quiz"}
                className={({ isActive }) =>
                  isActive
                    ? " block py-2 px-3 text-slate-700 rounded bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                    : "block py-2 px-3 text-slate-700 rounded hover:bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                }
              >
                {t("navbar.quiz")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? " block py-2 px-3 text-slate-700 rounded bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                    : "block py-2 px-3 text-slate-700 rounded hover:bg-orange-200 hover:text-orange-700  md:border-0 md:hover:text-orange-700 md:hover:bg-orange-100 md:px-2 transition-colors"
                }
              >
                {t("navbar.about")}
              </NavLink>
            </li>
            <li>
              <select
                onChange={handleLanguageChange}
                value={i18n.language}
                className="appearance-none w-full px-3 py-2 pr-10 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-700 shadow-sm"
              >
                <option value="tj">🇹🇯 TJ</option>
                <option value="en">🇺🇸 ENG</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
