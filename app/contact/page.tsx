import FlyNav from "../components/FlyNav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

    return(
        <div className="h-screen w-full relative flex items-center">
            <FlyNav></FlyNav>
            <div className="w-2/4 absolute h-full bg-white">

            </div>
            <div className="w-2/4 absolute right-0 h-full bg-[#175F65]">

            </div>

            <div className="overflow-hidden items-center w-4/6 flex justify-end h-3/4 absolute z-99 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-2/6 bg-[#175F65] flex flex-col items-center left-0 rounded-md absolute h-4/6">
                    <h1 className="font-extrabold text-3xl mt-10 text-white">Contact Info</h1>

                    <div className="w-4/5 mt-16 h-3/6 flex flex-col justify-between">
                        <div className="w-full flex items-center">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className={`text-white font-semibold text-3xl`}
                            />
                            <h3 className="text-white ml-6 font-medium text-lg">Kesiman Kertalangu, Kota Denpasar, Bali, Indonesia</h3>
                        </div>
                        <div className="w-full flex items-center">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className={`text-white font-semibold text-3xl`}
                            />
                            <h3 className="text-white ml-5 font-medium text-lg">+62895-623-449-113</h3>
                        </div>
                        <div className="w-full flex items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className={`text-white font-semibold text-3xl`}
                            />
                            <h3 className="text-white ml-5 font-medium text-lg">aristiooooo@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 bg-white flex items-center justify-end custom-shadow h-full">
                    <div className="w-3/4 h-4/6 flex flex-col">
                        <h1 className="text-4xl mt-2 text-[#175F65] font-extrabold">Send Message</h1>

                        <div className="w-full h-full mt-5">
                            <form action="#" className="h-full">

                                <div className="w-full h-1/6 flex">
                                    <div className="w-2/5 relative ">
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="First Name"
                                            name="nama"
                                            className="text-lg py-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500"
                                        />
                                    </div>
                                    <div className="w-2/5 ml-7 relative">
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Last Name"
                                            name="nama"
                                            className="text-lg py-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500"
                                        />
                                    </div>
                                </div>

                                <div className="w-full h-1/6 flex">
                                    <div className="w-2/5 relative">
                                        <input type="text" id="email-address" placeholder="Email Address" name="nama" className="text-lg py-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500" />
                                    </div>
                                    <div className="w-2/5 ml-7 relative">
                                        <input type="text" id="phone-number" placeholder="Phone Number" name="nama" className="text-lg py-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500" />
                                    </div>
                                </div>
                                
                                <div className="w-5/6 h-3/6 relative">
                                    <textarea name="" id="text-area" placeholder="Type your message here" className="text-lg py-2 w-full h-full border-b-2 border-gray-300 focus:outline-none focus:border-[#175F65]-500"></textarea>
                                </div>

                                <button type="submit" className="bg-[#175F65] font-medium text-lg h-fit py-2.5 w-5/6 rounded-sm mt-3 text-white">Submit </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}