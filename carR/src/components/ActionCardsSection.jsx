import React from "react";
import { OrderConfirmationCard } from "./ui/order-confirmation-card";
import { Icon } from "@iconify/react";

export default function ActionCardsSection() {
    return (
        <div className="bg-white pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Negative margin to pull cards closer to the hero section above */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-20 max-w-5xl mx-auto">
                    <OrderConfirmationCard
                        title="Acheter une voiture"
                        description="Parcourez notre large inventaire de véhicules inspectés et garantis."
                        buttonText="Acheter une voiture"
                        buttonVariant="outline"
                        hoverColor="red"
                        icon={<Icon icon="solar:cart-large-2-linear" className="h-10 w-10 text-slate-900" />}
                        onButtonClick={() => { }}
                    />
                    <OrderConfirmationCard
                        title="Vendre votre voiture"
                        description="Obtenez une estimation rapide et vendez votre véhicule au meilleur prix."
                        buttonText="Vendre une voiture"
                        buttonVariant="outline"
                        hoverColor="green"
                        icon={<Icon icon="solar:hand-money-linear" className="h-10 w-10 text-slate-900" />}
                        onButtonClick={() => { }}
                    />
                    <OrderConfirmationCard
                        title="Contactez-nous"
                        description="Besoin d'aide ou de conseils ? Notre équipe d'experts est à votre écoute."
                        buttonText="Contactez nous"
                        buttonVariant="outline"
                        hoverColor="blue"
                        icon={<Icon icon="solar:headset-linear" className="h-10 w-10 text-slate-900" />}
                        onButtonClick={() => { }}
                    />
                </div>
            </div>
        </div>
    );
}
