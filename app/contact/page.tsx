import FlyNav from "../components/FlyNav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
    faPaperPlane,
    faFileLines,
    faFileCode,
    faUser,
} from "@fortawesome/free-regular-svg-icons";


export default function Contact() {
    return(
        <div className="h-screen w-screen relative flex items-center">
            <FlyNav></FlyNav>faXmark
            <div className="w-2/4 absolute h-full bg-white">

            </div>
            <div className="w-2/4 absolute right-0 h-full bg-[#175F65]">

            </div>

            <div className="overflow-hidden items-center w-4/6 flex justify-end h-3/4 absolute z-99 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-2/6 bg-[#175F65] flex flex-col items-center left-0 rounded-md absolute h-5/6">
                    <h1 className="font-extrabold text-3xl mt-10 text-white">Contact Info</h1>

                    <div className="w-4/5 mt-16 h-2/5 flex flex-col justify-between">
                        <div className="w-full flex items-center">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className={`text-white font-semibold text-4xl`}
                            />
                            <h3 className="text-white ml-6 font-medium text-xl">Jln. By Pass Ngurah Rai No. 27X, Denpasar, Bali</h3>
                        </div>
                        <div className="w-full flex items-center">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className={`text-white font-semibold text-4xl`}
                            />
                            <h3 className="text-white ml-5 font-medium text-xl">+62895623449113</h3>
                        </div>
                        <div className="w-full flex items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className={`text-white font-semibold text-4xl`}
                            />
                            <h3 className="text-white ml-5 font-medium text-xl">aristiooooo@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 bg-white flex items-center justify-end shadow-2xl h-full">
                    <div className="w-3/4 h-3/4 flex flex-col">
                        <h1 className="text-4xl mt-2 text-[#175F65] font-extrabold">Send Message</h1>

                        <div className="w-full bg-black h-full mt-10">
                            <form action="#" className="h-full">
                                <div className="w-full h-1/4">
                                    <input type="text" id="nama" name="nama" placeholder="First Name" className="w-2/5 border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500" />
                                    <input type="text" id="nama" name="nama" placeholder="Last Name" className="ml-10 w-2/5 border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500" />
                                </div>
                                <div className="w-full h-1/4">
                                    <input type="text" id="nama" name="nama" placeholder="First Name" className="w-2/5 border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500" />
                                    <input type="text" id="nama" name="nama" placeholder="Last Name" className="ml-10 w-2/5 border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500" />
                                </div>
                                <div className="h-2/4">
                                    <textarea name="" id="" className="w-full h-full"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}