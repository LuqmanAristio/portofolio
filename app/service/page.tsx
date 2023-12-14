"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import FlyNav from "../components/FlyNav";
import mobiledev from "../../public/image/mobiledevelopment.jpg";
import uidesign from "../../public/image/ui design.png";
import mldev from "../../public/image/mldevelopment.jpeg";
import webdev from "../../public/image/webdevelopment.jpg";
import Image from 'next/image';

export default function Service () {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);


    return(
        <div className="h-screen relative flex items-center">
            <FlyNav></FlyNav>
            <Particles className="h-screen absolute"
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                        fullScreen: {
                            enable: false,
                            zIndex: 1,
                        },
                        background: {
                            color: {
                            value: "#f5f5f5", // Warna dasar abu-abu yang lebih lembut
                            },
                        },
                        fpsLimit: 60, // Mengurangi FPS untuk membuat pergerakan lebih lambat
                        interactivity: {
                            events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                            },
                            modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            },
                        },
                        particles: {
                            color: {
                                value: "#888888", // Warna abu-abu yang lebih lembut
                            },
                            links: {
                                color: "#888888", // Warna koneksi antar partikel yang lebih lembut
                                distance: 150,
                                enable: true,
                                opacity: 0.2, // Opasitas yang lebih rendah
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 0.3, // Mengurangi kecepatan partikel
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className="absolute flex items-center justify-center flex-col w-full h-full">
                    <h1 className="tracking-wider text-7xl text-[#444444] font-extrabold">Service</h1>
                    <p className="text-2xl mt-5 font-medium text-[#423F3E]">These are some of the areas I am currently interested in</p>

                    <div className="w-4/6 h-4/6 mt-10 flex">
                        <div className="h-full w-2/6 flex items-center justify-center">
                            <div className="w-full h-3/5 bg-slate-600 flex items-center justify-center relative overflow-hidden">
                                <Image
                                    src={webdev}
                                    alt="Web"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-bold text-white z-10">
                                    <h1>Web Development</h1>
                                </div>
                                <div className="absolute inset-0 bg-[#FF2F2F] bg-opacity-90 z-0"></div>
                            </div>
                        </div>
                        <div className="h-full w-4/6 flex flex-col">
                            <div className="h-2/4 w-full flex items-end">
                                <div className="w-2/5 h-full bg-slate-300 flex items-center relative justify-center overflow-hidden">
                                    <Image
                                        src={mobiledev}
                                        alt="Web"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-bold text-white z-10">
                                        <h1>Mobile Development</h1>
                                    </div>
                                    <div className="absolute inset-0 bg-[#093A3E] bg-opacity-80 z-0"></div>
                                </div>
                                <div className="w-3/5 h-3/4 bg-slate-400 flex items-center justify-center relative overflow-hidden">
                                        <Image
                                            src={uidesign}
                                            alt="Web"
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-bold text-white z-10">
                                            <h1>UI Design</h1>
                                        </div>
                                        <div className="absolute inset-0 bg-[#379620] bg-opacity-80 z-0"></div>
                                </div>
                            </div>
                            <div className="h-2/4 w-3/4 bg-slate-500 flex items-center justify-center relative overflow-hidden">
                                <Image
                                    src={mldev}
                                    alt="Web"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-bold text-white z-10">
                                    <h1>Machine Learning</h1>
                                </div>
                                <div className="absolute inset-0 bg-[#300FFF] bg-opacity-70 z-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}