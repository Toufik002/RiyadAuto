import React from "react";
import { Icon } from "@iconify/react";
import { InfiniteSlider } from "./ui/infinite-slider";
import { useI18n } from "../i18n/I18nProvider";

const iconCls = "h-[60px] w-auto text-slate-800 opacity-60 hover:opacity-100 hover:text-red-600 transition duration-300";

export default function InfiniteSliderBasic() {
    const { t, lang } = useI18n();

    return (
        <div className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className={`text-center text-4xl lg:text-6xl font-bold text-red-600 mb-12 ${lang === 'ar' ? '' : 'tracking-tight'}`}>
                    {t("brands.title")}
                </h2>

                <div dir="ltr">
                    <InfiniteSlider gap={50} duration={40} durationOnHover={75} className="w-full">
                        <Icon icon="simple-icons:mercedes" className={iconCls} />
                        <Icon icon="simple-icons:bmw" className={iconCls} />
                        <Icon icon="simple-icons:audi" className={iconCls} />
                        <Icon icon="simple-icons:hyundai" className="h-[50px] w-auto text-slate-800 opacity-60 hover:opacity-100 hover:text-red-600 transition duration-300" />
                        <Icon icon="simple-icons:renault" className={iconCls} />
                        <Icon icon="simple-icons:peugeot" className={iconCls} />
                        <Icon icon="simple-icons:ford" className={iconCls} />
                        <Icon icon="simple-icons:landrover" className={iconCls} />
                        <Icon icon="simple-icons:dacia" className={iconCls} />
                    </InfiniteSlider>
                </div>
            </div>
        </div>
    );
}
