import React from "react";
import { Icon } from "@iconify/react";
import AppointmentFormCard from "../components/AppointmentFormCard";

export default function ExpertPage() {
    return (
        <section className="relative bg-white text-slate-900">
            <main className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* LEFT */}
                    <div className="relative">
                        <h1 className="mb-8 text-4xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-slate-900">
                            Vous souhaitez acheter une{" "}
                            <span className="bg-red-600 text-white px-2 transform -skew-x-6 inline-block">
                                voiture
                            </span>{" "}
                            qui n&apos;est pas sur notre site ?
                            <br />
                            Faites-vous accompagner par un expert{" "}
                            <span className="bg-red-600 text-white px-2 transform -skew-x-6 inline-block">
                                RiyadAuto
                            </span>{" "}
                            en toute tranquillité
                        </h1>

                        <p className="mb-10 max-w-xl text-lg text-slate-600 leading-relaxed">
                            Notre expert se déplace sur le lieu de votre choix pour contrôler la mécanique,
                            la carrosserie, effectuer un diagnostic électronique et s’assurer qu’il n’y a
                            pas de blocage administratif.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="button"
                                onClick={() => {
                                    // scroll to form on right (nice UX)
                                    const el = document.getElementById("expert-form");
                                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                className="group flex h-14 items-center justify-center gap-2 rounded-lg bg-red-600 px-8 text-base font-medium text-white shadow-xl shadow-red-200 transition-all hover:bg-red-700"
                            >
                                Remplir le formulaire
                                <Icon
                                    icon="solar:arrow-right-linear"
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>

                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <Icon icon="solar:shield-check-linear" className="h-5 w-5" />
                                <span>Réponse rapide • Service sécurisé</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT (FORM) */}
                    <div
                        id="expert-form"
                        className="relative flex items-center justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-md">
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
    );
}
