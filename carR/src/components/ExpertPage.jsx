import React from "react";
import AppointmentFormCard from "../components/AppointmentFormCard";
import ExpertValueCardsSection from "../components/ExpertValueCardsSection"


const Highlight = ({ children, className = "" }) => (
    <span className={`relative inline-block ${className}`}>
        <span className="absolute inset-x-0 bottom-1 top-1 bg-red-600 -skew-x-12 transform"></span>
        <span className="relative z-10 text-white px-3 py-1 font-extrabold italic">
            {children}
        </span>
    </span>
);

export default function ExpertPage() {
    return (
        <>
            <section className="relative bg-white text-slate-900 overflow-hidden">
                {/* Subtle background decoration if needed, but keeping it clean for now */}
                <main className="relative z-10 mx-auto max-w-[90rem] px-6 py-16 lg:py-24 lg:px-12">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* LEFT TEXT */}
                        <div className="max-w-2xl">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl text-[#0f172a]">
                                    Vous souhaitez acheter une{" "}
                                    <br />
                                    <Highlight className="mt-2">voiture d&apos;occasion</Highlight>
                                    <br />
                                    qui n&apos;est pas sur notre site ?
                                </h1>
                            </div>

                            <div className="mt-3 space-y-3">
                                <h2 className="text-2xl font-bold leading-tight sm:text-3xl text-[#0f172a]">
                                    Faites vous accompagner par un expert{" "}
                                    <Highlight>RiyadAuto</Highlight> pour acheter en toute{" "}
                                    <Highlight>tranquillité</Highlight>
                                </h2>

                                <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                                    Notre expert se déplace sur le lieu de votre choix pour contrôler la mécanique,
                                    la carrosserie, effectuer un diagnostic électronique et s&apos;assurer qu&apos;il
                                    n&apos;y a pas de blocage administratif.
                                </p>
                            </div>
                        </div>

                        {/* FORM (centered) */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-lg">
                                <AppointmentFormCard
                                    onSubmit={(data) => {
                                        console.log("FORM DATA:", data);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <ExpertValueCardsSection />
        </>

    );

}
