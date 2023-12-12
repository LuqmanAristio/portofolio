"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
    faPaperPlane,
    faFileLines,
    faFileCode,
    faUser,
} from "@fortawesome/free-regular-svg-icons";

export default function FlyNav() {

  const[menuClick, setMenu]=useState(true);

  const handleClick = () => {
    setMenu(!menuClick);
  };

  return (
    <div className="h-[40vw] w-fit absolute z-[100] flex items-center">
        <div className={`ml-36 h-${menuClick?'20':'full'} transition-height duration-300 ease-in-out rounded-lg w-full bg-[#093A3E] py-10 px-7 flex justify-${menuClick?'center':'between'} items-center flex-col`}>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className={`text-white font-semibold ${menuClick?'hidden':''} text-4xl cursor-pointer`}
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faFileCode}
                    className={`text-white font-semibold ${menuClick?'hidden':''} text-4xl cursor-pointer`}
                />
            </a>

            {menuClick ? (
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-white font-semibold text-4xl cursor-pointer transition-transform duration-300 ease-in-out transform"
                    onClick={handleClick}
                />
                ) : (
                <FontAwesomeIcon
                    icon={faXmark}
                    className="text-white font-semibold text-4xl cursor-pointer transition-transform duration-300 ease-in-out transform rotate-90"
                    onClick={handleClick}
                />
            )}

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faFileLines}
                    className={`text-white font-semibold ${menuClick?'hidden':''} text-4xl cursor-pointer`}
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    className={`text-white font-semibold ${menuClick?'hidden':''} text-4xl cursor-pointer`}
                />
            </a>
        </div>
    </div>
  )
}