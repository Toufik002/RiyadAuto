import React from "react";
import { Icon } from "@iconify/react";
import pic from "../assets/vendre.jpg";

export default function HeroVendre({ onOpenModal }) {
    return (
        <section className="relative bg-white text-slate-900">

            {/* Hero */}
            <main className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Left Column */}
                    <div className="relative">
                        <h1 className="mb-8 text-4xl lg:text-6xl font-bold tracking-tight leading-[1.2] text-slate-900">
                            Vendez votre{" "}
                            <span className="bg-red-600 text-white px-2 transform -skew-x-6 inline-block">
                                voiture rapidement
                            </span>{" "}
                            <br />
                            avec RiyadAuto en toute{" "}
                            <span className="bg-red-600 text-white px-2 transform -skew-x-6 inline-block">
                                sécurité
                            </span>
                        </h1>

                        <p className="mb-10 max-w-lg text-lg text-slate-600 leading-relaxed">
                            Confiez-nous la vente de votre véhicule.
                            RiyadAuto vous accompagne dans chaque étape :
                            estimation, publication, négociation et transaction sécurisée.
                            Vendez votre voiture sans stress et au meilleur prix.
                        </p>

                        <div className="mb-16 flex flex-col sm:flex-row gap-4">
                            <button
                                type="button"
                                onClick={onOpenModal}
                                className="group flex h-14 items-center justify-center gap-2 rounded-lg bg-red-600 px-8 text-base font-medium text-white shadow-xl shadow-red-200 transition-all hover:bg-red-700"
                            >
                                Vendez votre voiture
                                <Icon
                                    icon="solar:arrow-right-linear"
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative h-full min-h-[500px] flex items-center justify-center">
                        <img
                            src={pic}
                            alt="Vendre votre voiture"
                            className="w-full h-auto object-contain mix-blend-multiply"
                            loading="lazy"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
}
