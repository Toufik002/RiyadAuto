import React from "react";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

function InfoCard({
    title,
    underlineColor = "bg-red-600",
    children,
    buttonText,
    onClick,
    buttonClass,
}) {
    return (
        <div
            className={cn(
                "group flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden",
                "shadow-md transition-all duration-300",
                "hover:-translate-y-2 hover:border-red-400",
                "hover:shadow-[0_25px_55px_-20px_rgba(239,68,68,0.45)]"
            )}
        >
            {/* ✅ Red Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-red-200/50 pointer-events-none" />

            {/* TOP */}
            <div className="relative px-7 pt-8 pb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">{title}</h3>

                {/* underline */}
                <div className={cn("mt-3 h-[2px] w-16", underlineColor)} />

                {/* text */}
                <div className="mt-5 text-sm leading-relaxed text-slate-600">
                    {children}
                </div>

                {/* Button */}
                <div className="mt-6">
                    <button
                        type="button"
                        onClick={onClick}
                        className={cn(
                            "h-11 rounded-md px-5 text-sm font-bold text-white transition-all shadow-sm",
                            "hover:scale-[1.03]",
                            buttonClass
                        )}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

            {/* BOTTOM bar */}
            <div className="bg-slate-50 px-7 py-5">
                <p className="text-xs text-slate-500">
                    RiyadAuto • Service simple • Transactions sécurisées
                </p>
            </div>
        </div>
    );
}

export default function WhyRiyadAutoSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
                {/* ✅ staggered layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                    {/* LEFT card */}
                    <div className="lg:pr-4">
                        <InfoCard
                            title="Pourquoi vendre chez RiyadAuto ?"
                            underlineColor="bg-red-600"
                            buttonText="Vendre ma voiture"
                            buttonClass="bg-red-600 hover:bg-red-700 shadow-red-200"
                            onClick={() => {
                                const el = document.getElementById("sell");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <p>
                                Vendre une voiture peut prendre du temps et demander beaucoup
                                d’efforts. Avec{" "}
                                <span className="font-semibold text-slate-900">RiyadAuto</span>,
                                vous gagnez du temps et vous évitez les mauvaises surprises.
                            </p>

                            <p className="mt-3">
                                On vous accompagne avec un processus clair, une estimation
                                réaliste, et un suivi sérieux jusqu’à la finalisation.
                            </p>
                        </InfoCard>
                    </div>

                    {/* RIGHT card (shifted down) */}
                    <div className="lg:pl-4 lg:mt-12">
                        <InfoCard
                            title="Pourquoi acheter avec RiyadAuto ?"
                            underlineColor="bg-red-600"
                            buttonText="J’achète en toute tranquillité"
                            buttonClass="bg-slate-900 hover:bg-slate-800 shadow-black/10"
                            onClick={() => {
                                const el = document.getElementById("buy");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <p>
                                Acheter une voiture demande confiance et vérifications. Chez{" "}
                                <span className="font-semibold text-slate-900">RiyadAuto</span>,
                                on vous aide à choisir le bon véhicule, au bon prix, en toute
                                sécurité.
                            </p>

                            <p className="mt-3">
                                Une expérience fluide, transparente, et un accompagnement
                                professionnel pour acheter sans stress.
                            </p>
                        </InfoCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
