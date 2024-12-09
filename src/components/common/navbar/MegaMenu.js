import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import IntegrateApp from "./IntegrateApp";
import { motion } from "framer-motion";

const MegaMenu = ({ toggleMenu, menu, isOpen, isScrolled }) => {
  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
      <div className="relaive">
        <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8">
          {menu.navItems.map((menuItem, j) => (
            <li
              key={j}
              onMouseEnter={() => toggleMenu(menuItem.name)}
              onMouseLeave={() => toggleMenu(null)}
              className="py-6"
            >
              <Link href={menuItem.mainLink || ""}>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className={`${
                    isScrolled ? "text-[#003058]" : "text-white"
                  } flex items-center justify-between w-full py-2 px-3 font-medium  transition-all hover:font-semibold`}
                >
                  {menuItem.name}
                  {menuItem.mainLink ? null : (
                    <RiArrowDownSLine
                      className={`text-xl ms-1 mt-1 transition-all duration-200 ${
                        isOpen === menuItem.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              </Link>
              {menuItem.name === isOpen &&
                (menuItem.sections ? (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 0.15 }}
                    className={` bg-white border-gray-200 shadow-sm border-y  absolute left-0 top-full bg-white w-full shadow-sm mega-menu ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    <div className=" max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white flex md:px-6 w-full">
                      {menuItem.sections?.map((section, k) => {
                        const totalSections = menuItem.sections.length;
                        const hasRightBorder =
                          totalSections > 1 &&
                          (totalSections > 2 ? k === 0 || k === 1 : k === 0);

                        return (
                          <div
                            key={k}
                            className={`${
                              hasRightBorder ? "border-r border-gray-300" : ""
                            } px-4 w-full`}
                          >
                            <h2 className="text-primary text-left px-3 text-base uppercase ">
                              {section.title}
                            </h2>
                            <div className="flex  flex-wrap">
                              {section.navMenu.map((item, i) => (
                                <div
                                  className={`${section?.customClass}`}
                                  key={i}
                                >
                                  <Link onClick={() => toggleMenu(null)}
                                    href={item.link || "#"}
                                    className="  block p-3 rounded-lg hover:bg-[#ECF8FD] "
                                  >
                                    <div className="font-semibold text-sm text-[#003058]">
                                      {item?.title}
                                    </div>
                                    <p className="text-[13px] leading-tight  text-[#003058] pt-2">
                                      {item?.desc}
                                    </p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {menuItem.name === "Features" && <IntegrateApp />}
                  </motion.div>
                ) : null)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
