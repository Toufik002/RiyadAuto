import React from "react";
import { Icon } from "@iconify/react";
import { FeatureHoverCard } from "./ui/feature-hover-card";

export default function ExpertValueCardsSection() {
    const cards = [
        {
            title: "Transparence",
            description:
                "Des informations claires, des étapes expliquées, et un suivi transparent du début à la fin.",
            icon: <Icon icon="solar:eye-linear" className="h-10 w-10 text-slate-900" />,
        },
        {
            title: "Disponibilité",
            description:
                "Une équipe réactive pour répondre à vos questions et vous accompagner à chaque étape.",
            icon: (
                <Icon
                    icon="solar:clock-circle-linear"
                    className="h-10 w-10 text-slate-900"
                />
            ),
        },
        {
            title: "Conseil",
            description:
                "On vous guide pour éviter les mauvaises surprises et faire le meilleur choix selon votre besoin.",
            icon: (
                <Icon
                    icon="solar:chat-round-line-linear"
                    className="h-10 w-10 text-slate-900"
                />
            ),
        },
        {
            title: "Facilité",
            description:
                "Démarches simplifiées, gain de temps, et processus fluide pour acheter en toute sérénité.",
            icon: (
                <Icon
                    icon="solar:check-circle-linear"
                    className="h-10 w-10 text-slate-900"
                />
            ),
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
                {/* ✅ Title Center */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Pourquoi choisir RiyadAuto ?
                    </h2>

                    {/* ✅ Underline Red */}
                    <div className="mx-auto mt-3 h-[2px] w-20 bg-red-600" />

                    <p className="mt-4 text-sm text-slate-500 sm:text-base">
                        Transparence, disponibilité, conseil et facilité — tout pour une
                        expérience simple et sécurisée.
                    </p>
                </div>

                {/* ✅ Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((c, i) => (
                        <FeatureHoverCard
                            key={i}
                            title={c.title}
                            description={c.description}
                            icon={c.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
