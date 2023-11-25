"use client"

import Image from "next/image"
import iconplan from "../../public/image/blueprint.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
    faPaperPlane,
    faFileLines,
    faFileCode,
    faUser,
} from "@fortawesome/free-regular-svg-icons";

export default function FlyNav() {

  return (
    <div className="h-screen w-fit absolute z-[100] flex items-center">
        <div className="ml-36 h-4/5 rounded-lg w-full bg-[#093A3E] py-10 px-7 flex justify-between items-center flex-col">
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className="text-white font-semibold text-4xl"
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faFileCode}
                    className="text-white font-semibold text-4xl"
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faXmark}
                    className="text-white font-semibold text-4xl"
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faFileLines}
                    className="text-white font-semibold text-4xl"
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-white font-semibold text-4xl"
                />
            </a>

            {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={iconhome}
                    alt="Instagram"
                    className='w-12'
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={iconx}
                    alt="Instagram"
                    className='w-12'
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={iconnote}
                    alt="Instagram"
                    className='w-12'
                />
            </a>

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={iconcall}
                    alt="Instagram"
                    className='w-12'
                />
            </a> */}
        </div>
    </div>
  )
}