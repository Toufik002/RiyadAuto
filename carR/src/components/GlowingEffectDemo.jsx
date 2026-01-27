import React from "react";
import { ShoppingCart, HandCoins, CreditCard, Car, ShieldCheck } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { useI18n } from "../i18n/I18nProvider";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function GlowingEffectDemo() {
    const { t } = useI18n();

    return (
        <div className="max-w-[90rem] mx-auto px-4 w-full py-24">
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<ShoppingCart className="h-4 w-4" />}
                    title={t("features.dealsTitle")}
                    description={t("features.dealsDesc")}
                />
                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<HandCoins className="h-4 w-4" />}
                    title={t("features.sellTitle")}
                    description={t("features.sellDesc")}
                />
                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<CreditCard className="h-4 w-4" />}
                    title={t("features.financeTitle")}
                    description={t("features.financeDesc")}
                />
                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Car className="h-4 w-4" />}
                    title={t("features.newModelsTitle")}
                    description={t("features.newModelsDesc")}
                />
                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<ShieldCheck className="h-4 w-4" />}
                    title={t("features.peaceTitle")}
                    description={t("features.peaceDesc")}
                />
            </ul>
        </div>
    );
}

const GridItem = ({ area, icon, title, description }) => {
    return (
        <li className={cn("min-h-[14rem] list-none", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-slate-200 p-2 md:rounded-[1.5rem] md:p-3 bg-white">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-slate-200 bg-white p-6 shadow-sm md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-slate-200 bg-slate-50 p-2">
                            {icon}
                        </div>

                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-slate-900">
                                {title}
                            </h3>
                            <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-slate-500">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
