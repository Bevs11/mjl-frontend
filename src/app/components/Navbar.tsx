import React from "react";
import Image from "next/image";

import LogoSmall from "../../../public/mjl-logo.svg";
import Magnfyingglass from "../../../public/navbar/magnifying-glass.svg";

export default function Navbar() {
    return (
        <div className="h-[56px] bg-customDarkBlue">
            <div className="h-full px-2 sm:px-8 md:px-12 lg:px-[64px] flex items-center justify-between">
                <div className="flex gap-1">
                    <Image
                        src={LogoSmall}
                        alt="mjl logo small"
                        width={39}
                        height={39}
                    />
                    <div className="font-bold text-2xl text-white my-auto">
                        MJL ONLINE
                    </div>
                </div>
                <div className="flex gap-6 text-white">
                    <div>CATEGORIES</div>
                    <div>WEBINARS</div>
                    <div>CERTIFICATE</div>
                </div>
                <div className="bg-white/10 py-2 px-2 rounded w-full max-w-[500px] flex">
                    <Image
                        src={Magnfyingglass}
                        alt="magnifying glass"
                        width={20}
                        height={20}
                    />
                    <input type="text" className="w-full bg-transparent" />
                </div>
                <button className="btn-sky-blue">Create Account</button>
            </div>
        </div>
    );
}
