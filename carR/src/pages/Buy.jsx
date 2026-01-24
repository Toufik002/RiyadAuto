import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ModelTabs from "../components/ModelTabs";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";
import { useI18n } from "../i18n/I18nProvider";

export default function Home() {
  const { t } = useI18n();
  const [activeModel, setActiveModel] = useState("carrera");

  const filtered = useMemo(() => cars, []);
  const adsCount = 1072;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-6 py-6">
        <SearchBar />
      </div>

      <ModelTabs activeModel={activeModel} onModelChange={setActiveModel} />

      <div className="container mx-auto px-6 py-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="text-blue-600 hover:underline">
              {t("home.breadcrumb.city")}
            </a>
            <span className="text-gray-400">›</span>
            <a href="#" className="text-blue-600 hover:underline">
              {t("home.breadcrumb.motors")}
            </a>
            <span className="text-gray-400">›</span>
            <span>{t("home.breadcrumb.usedCars")}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {t("home.title")}{" "}
            <span className="text-gray-500 font-normal">
              ({t("home.ads", { count: adsCount })})
            </span>
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {t("home.sort")} <span className="text-gray-900">{t("home.default")}</span>
            </span>
            <button className="border border-gray-200 bg-white text-gray-900 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50">
              {t("home.saveSearch")}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="border border-gray-200 bg-white text-gray-900 rounded-md px-10 py-3 text-sm font-semibold hover:bg-gray-50">
            {t("home.loadMore")}
          </button>
        </div>
      </div>
    </div>
  );
}
