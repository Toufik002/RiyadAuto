import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Gauge, Navigation, Shield } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

function Badge({ children, variant = "red" }) {
  const styles =
    variant === "blue"
      ? "bg-blue-600 text-white"
      : variant === "gray"
        ? "bg-gray-900 text-white"
        : "bg-red-600 text-white";
  return (
    <span className={"px-3 py-1 rounded-full text-xs font-bold " + styles}>
      {children}
    </span>
  );
}

export default function CarCard(props) {
  const { t } = useI18n();
  const navigate = useNavigate();

  const {
    id,
    images,
    price,
    brand,
    model,
    variant,
    year,
    mileage,
    steering,
    specs,
    location,
    seller,
    badges = [],
    isApproved,
  } = props;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
        <div className="relative h-48 md:h-full bg-gray-100">
          <img
            src={images?.[0]}
            alt={`${brand} ${model}`}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-3 left-3 flex gap-2">
            {badges?.includes("CAR OF THE WEEK") && (
              <Badge variant="red">{t("car.carOfWeek")}</Badge>
            )}
            {isApproved && <Badge variant="blue">{t("car.approved")}</Badge>}
            {badges?.includes("PREMIUM") && (
              <Badge variant="red">{t("car.premium")}</Badge>
            )}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900">
                {brand} {model} {variant}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{location}</p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600 mt-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-gray-400" />
                  <span>
                    {Number(mileage).toLocaleString()} {t("car.km")}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-gray-400" />
                  <span>{steering}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span>{specs}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                  {seller?.[0]?.toUpperCase() || "A"}
                </div>
                <div className="text-sm font-medium text-gray-700">{seller}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-red-600 font-extrabold text-xl">
                {t("car.aed")} {Number(price).toLocaleString()}
              </div>
              <button
                onClick={() => navigate(`/car/${id}`)}
                className="mt-4 text-red-600 font-semibold text-sm hover:underline"
              >
                {t("car.viewDetails")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
