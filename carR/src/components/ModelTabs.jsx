import React from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function ModelTabs({ activeModel, onModelChange }) {
  const { t } = useI18n();

  const models = [
    { key: "carrera", count: 394 },
    { key: "cayenne", count: 294 },
    { key: "macan", count: 111 },
    { key: "panamera", count: 85 },
    { key: "cayman", count: 66 },
    { key: "boxster", count: 53 },
    { key: "taycan", count: 34 }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          {models.map((m) => {
            const active = activeModel === m.key;
            return (
              <button
                key={m.key}
                onClick={() => onModelChange(m.key)}
                className={
                  "whitespace-nowrap px-3 py-2 text-sm border-b-2 transition-all " +
                  (active
                    ? "border-blue-600 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-50")
                }
              >
                {t(`models.${m.key}`)}{" "}
                <span className="ml-1 text-gray-500 font-medium">({m.count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
