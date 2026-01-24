import React, { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

function Chip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "px-5 py-3 rounded-full border text-sm font-semibold transition " +
        (active
          ? "border-blue-500 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50")
      }
    >
      {children}
    </button>
  );
}

export default function FilterSheet({
  open,
  title,
  options,
  value,
  onClose,
  onApply,
}) {
  const { t } = useI18n();
  const [local, setLocal] = useState(value);

  useEffect(() => {
    if (open) setLocal(value);
  }, [open, value]);

  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  const currentLabel = useMemo(() => {
    const found = options.find((o) => o.value === local);
    return found?.label ?? "";
  }, [options, local]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
        aria-label="Close"
      />

      {/* sheet */}
      <div className="absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-2xl overflow-hidden">
        {/* grabber */}
        <div className="flex justify-center pt-3">
          <div className="w-12 h-1.5 rounded-full bg-gray-200" />
        </div>

        {/* content */}
        <div className="px-5 pt-4 pb-3">
          <div className="text-sm font-bold text-gray-900">{title}</div>
          {currentLabel ? (
            <div className="text-2xl font-extrabold text-gray-900 mt-2">
              {currentLabel}
            </div>
          ) : null}
        </div>

        <div className="border-t border-gray-100" />

        <div className="px-5 py-5">
          <div className="flex flex-wrap gap-3">
            {options.map((o) => (
              <Chip
                key={o.value}
                active={local === o.value}
                onClick={() => setLocal(o.value)}
              >
                {o.label}
              </Chip>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* footer */}
        <div className="p-4">
          <button
            type="button"
            onClick={() => {
              onApply?.(local);
              onClose?.();
            }}
            className="w-full h-14 rounded-2xl bg-gray-900 hover:bg-black text-white font-extrabold text-lg"
          >
            Apply Filters
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full mt-3 h-12 rounded-xl text-gray-600 font-semibold hover:bg-gray-50"
          >
            {t("language.title") /* غير باش نستعمل i18n عندك، تقدر تبدلها */}
          </button>
        </div>
      </div>
    </div>
  );
}
