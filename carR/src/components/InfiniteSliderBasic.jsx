import React from "react";
import { Icon } from "@iconify/react";
import { InfiniteSlider } from "./ui/infinite-slider";

export default function InfiniteSliderBasic() {
    return (
        <div className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-4xl lg:text-6xl font-bold text-red-600 mb-12 tracking-tight">
                    Marques de voitures populaires
                </h2>
                <InfiniteSlider gap={50} duration={40} durationOnHover={75} className="w-full">
                    <Icon icon="simple-icons:mercedes" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:bmw" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:audi" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:hyundai" className="h-[50px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:renault" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:peugeot" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:ford" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:landrover" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:dacia" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />

                    {/* Duplicate for seamless loop if needed, though InfiniteSlider handles children duplication typically, adding more helps smoothness */}
                    <Icon icon="simple-icons:mercedes" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:bmw" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                    <Icon icon="simple-icons:audi" className="h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 transition duration-300" />
                </InfiniteSlider>
            </div>
        </div>
    );
}
