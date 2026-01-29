import React from "react";
import { Collapsible } from "@ark-ui/react/collapsible";
import { ChevronDownIcon } from "lucide-react";

const faqs = [
    {
        question: "1. Rachetez-vous des voitures avec un financement en cours ?",
        answer:
            "Oui, nous pouvons racheter votre véhicule même si un financement est en cours.",
    },
    {
        question:
            "2. Puis-je faire reprendre ma voiture actuelle pour acheter une nouvelle voiture chez RiyadAuto ?",
        answer:
            "Oui, nous pouvons reprendre votre voiture actuelle et vous proposer une solution adaptée.",
    },
    {
        question: "3. Combien de temps mon prix est-il valable ?",
        answer:
            "L’offre est valable pendant une durée limitée selon l’état du marché.",
    },
    {
        question: "4. Comment vais-je recevoir le paiement ?",
        answer:
            "Le paiement se fait de manière sécurisée, par chèque ou virement bancaire.",
    },
    {
        question: "5. Vais-je toujours recevoir une offre ?",
        answer:
            "Nous faisons notre maximum pour vous proposer une offre selon votre véhicule.",
    },
    {
        question: "6. Puis-je visiter votre Showroom sans rendez-vous ?",
        answer:
            "Oui, vous pouvez passer au showroom, mais un rendez-vous est recommandé.",
    },
];

export default function FAQRiyadAuto() {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-5xl px-4">
                {/* ✅ Title */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Question fréquemment posées
                    </h2>

                    {/* ✅ Red line Theme */}
                    <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-[#E11D48]" />
                </div>

                {/* ✅ FAQ Items */}
                <div className="mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <Collapsible.Root
                            key={index}
                            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                        >
                            {/* Trigger */}
                            <Collapsible.Trigger
                                className="group flex w-full items-center justify-between px-6 py-5 text-left 
                transition-all duration-200 hover:bg-[#FFF1F2]"
                            >
                                {/* Question */}
                                <span className="text-[15px] font-medium text-slate-900">
                                    {faq.question}
                                </span>

                                {/* Chevron Icon */}
                                <Collapsible.Indicator className="shrink-0 transition-transform duration-200 data-[state=open]:rotate-180">
                                    <ChevronDownIcon className="h-5 w-5 text-[#E11D48] group-hover:text-[#BE123C]" />
                                </Collapsible.Indicator>
                            </Collapsible.Trigger>

                            {/* Content */}
                            <Collapsible.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:slide-in-from-top-1 data-[state=closed]:slide-out-to-top-1">
                                <div className="border-t border-slate-200 bg-[#FFF1F2] px-6 py-4">
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        {faq.answer}
                                    </p>
                                </div>
                            </Collapsible.Content>
                        </Collapsible.Root>
                    ))}
                </div>
            </div>
        </section>
    );
}
