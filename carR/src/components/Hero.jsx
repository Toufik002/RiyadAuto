import React from "react";
import { Icon } from "@iconify/react";

export default function Hero() {
    return (
        <section className="relative bg-white text-slate-900">


            {/* Hero */}
            <main className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column */}
                    <div className="relative">




                        <h1 className="mb-8 text-4xl lg:text-6xl font-bold tracking-tight leading-[1.2] text-slate-900">
                            Trouvez votre <span className="bg-red-600 text-white px-2 transform -skew-x-6 inline-block">voiture de rêve</span> <br />
                            avec RiyadAuto en toute <span className="bg-red-600 text-white px-2 transform -skew-x-6 inline-block">simplicité</span>
                        </h1>

                        <p className="mb-10 max-w-lg text-lg text-slate-600 leading-relaxed">
                            RiyadAuto s’occupe de trouver un acheteur sérieux pour votre voiture.
                            Nous gérons toutes les transactions de manière sécurisée et professionnelle.
                            Faites confiance à notre service de qualité pour vendre votre véhicule en toute sécurité et sans tracas.
                        </p>

                        <div className="mb-16 flex flex-col sm:flex-row gap-4">
                            <button
                                type="button"
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
                            src="https://img.freepik.com/vecteurs-premium/illustration-concept-financement-automobile_114360-8258.jpg?semt=ais_se_enriched&w=740&q=80"
                            alt="Digital Growth Concept"
                            className="w-full h-auto object-contain mix-blend-multiply"
                            loading="lazy"
                        />


                    </div>
                </div>
            </main>
        </section>
    );
}