import Image from "next/image";
import React from "react";

import MJLLogo from "../../../../public/mjl-logo.svg";
import XLogo from "../../../../public/homepage/x-logo.svg";
import FacebookLogo from "../../../../public/homepage/facebook-logo.svg";
import InstaLogo from "../../../../public/homepage/instagram-logo.svg";
import LinkedinLogo from "../../../../public/homepage/linkedin-logo.svg";
import HeroImage from "../../../../public/homepage/hero-image.svg";

export default function Hero() {
    return (
        <div className="max-sm:h-full full-height page-width">
            <div className=" h-full  px-2 sm:px-8 md:px-12 lg:px-20 flex items-end justify-center">
                {/* left */}
                <div className="w-[554px] h-full flex flex-col justify-center">
                    <Image
                        src={MJLLogo}
                        alt="MJL logo"
                        width={200}
                        height={200}
                    />
                    <div className="pl-5">
                        <div>
                            <div className="text-customSkyBlue text-3xl">
                                MJL Online
                            </div>
                            <div className="text-5xl font-bold">
                                WEBINAR AND ONLINE TRAINING
                            </div>
                            <div className="text-xl font-medium mt-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="mt-12">
                            <button className="btn-yellow">Register Now</button>
                            <button className="btn-dark-blue ml-4">
                                Browse Webinars
                            </button>
                        </div>
                        <div className="btn-highlight-blue mt-12 rounded-[25px] flex flex-col justify-center items-center gap-4 py-4">
                            <div className="font-bold text-xl">
                                Follow us at
                            </div>
                            <div className="flex gap-5">
                                <Image
                                    src={XLogo}
                                    alt="x logo"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src={FacebookLogo}
                                    alt="facebook logo"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src={InstaLogo}
                                    alt="instagram logo"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src={LinkedinLogo}
                                    alt="linkedin logo"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div>
                    <Image
                        src={HeroImage}
                        alt=""
                        width={794}
                        height={856}
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
