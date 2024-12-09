import Link from 'next/link'
import React from 'react'
import { FiPlus } from "react-icons/fi";


const MobileMenu = ({menu, activeMenu,setActiveMenu }) => {
  const toggleSubMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };
  return (
    
    <div className=" bg-white dark:bg-gray-800 shadow-lg lg:hidden">
          <ul className="p-4 space-y-4">
            {menu.navItems.map((menuItem, index) => (
              <li key={index}>
                {menuItem.mainLink ? (
                  <Link href={menuItem.mainLink || ""}>
                    <button
                      onClick={() => toggleSubMenu(menuItem.name)}
                      className="flex justify-between items-center w-full text-left p-2 text-[#003058]   dark:text-gray-200"
                    >
                      {menuItem.name}
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleSubMenu(menuItem.name)}
                    className="flex justify-between items-center w-full text-left p-2 text-[#003058]   dark:text-gray-200"
                  >
                    {menuItem.name}
                    <span>{activeMenu === menuItem.name ? <FiPlus className='rotate-45 text-lg transition-all'/> :  <FiPlus className=' text-lg transition-all'/>}</span>
                  </button>
                )}

                {activeMenu === menuItem.name && menuItem.sections && (
                  <div className="pl-2 mt-2 space-y-2 transition-all">
                    {menuItem.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-primary text-left  text-base uppercase">
                          {section.title}
                        </h3>
                        <ul className="mt-2">
                          {section.navMenu.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.link || "#"}
                                className="block text-sm text-[#003058]  py-2"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default MobileMenu