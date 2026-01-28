import React from "react";
import { Icon } from "@iconify/react";

export default function HowItWorksSection({ onOpenModal }) {
    const steps = [
        {
            title: "Entrez les informations du véhicule",
            desc: `Après avoir cliqué sur le bouton "Vendez votre voiture", 
      une fenêtre s’ouvre où vous pouvez saisir les informations de votre voiture 
      (marque, modèle, année...) pour être rappelé par nos experts.`,
            img: "/src/assets/infored.png",
            reverse: false,
        },
        {
            title: "Prise de rendez-vous",
            desc: `Un de nos commerciaux va vous rappeler pour prendre un rendez-vous avec un expert.
      L’expertise est facturée 200 DH, mais elle devient gratuite si votre voiture ne correspond pas 
      aux normes de vente.`,
            img: "/src/assets/rend.png",
            reverse: true,
        },
        {
            title: "Estimation de votre véhicule",
            desc: `À la fin de l’expertise, l’expert vous donnera un prix juste et compétitif,
      basé sur l’état de votre véhicule et le marché actuel. 
      Si le montant proposé ne vous convient pas, nous trouvons un acheteur au prix désiré.`,
            img: "/src/assets/vtr.jpg",
            reverse: false,
        },
        {
            title: "Paiement sécurisé",
            desc: `Si vous acceptez l’offre, nous récupérons votre véhicule contre un paiement sécurisé
      (virement ou chèque) sous 48h. Nous nous occupons aussi de toutes les démarches administratives.`,
            img: "/src/assets/payment.png",
            reverse: true,
        },
    ];

    return (
        <section className="bg-[#f6f9ff] py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Comment ça marche
                    </h2>
                    <div className="w-16 h-[2px] bg-red-500 mx-auto mt-4"></div>
                </div>

                {/* Steps */}
                <div className="space-y-28">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row gap-16 items-center ${step.reverse ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="flex-1 flex justify-center">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-[320px] h-auto object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-800 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm max-w-md">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-20 flex justify-center">
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
        </section>
    );
}
