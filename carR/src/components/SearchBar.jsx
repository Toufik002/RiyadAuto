import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "../i18n/I18nProvider";

// 1. Component l-pills (City & Year)
function PillSelector({ label, options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div className="space-y-2 relative" ref={wrapperRef}>
      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 flex items-center justify-between rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700 cursor-pointer hover:border-gray-400 select-none"
      >
        <span className={!value ? "text-gray-500" : "text-gray-900"}>{value || placeholder}</span>
        <svg className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[320px] z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-4">
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { onChange(option); setIsOpen(false); }}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${value === option ? "bg-blue-50 border-blue-500 text-blue-600 shadow-sm" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 2. Range Selector Dropdown (Prix/KM)
function RangeSelector({ label, fromValue, toValue, onFromChange, onToChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const displayText = fromValue || toValue ? `${fromValue || 0} - ${toValue || 'Any'}` : placeholder;

  return (
    <div className="space-y-2 relative" ref={wrapperRef}>
      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 flex items-center justify-between rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700 cursor-pointer hover:border-gray-400 select-none"
      >
        <span className={displayText === placeholder ? "text-gray-500" : "text-gray-900"}>{displayText}</span>
        <svg className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[280px] z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-5">
          <div className="flex items-center gap-3">
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase">From</span>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => onFromChange(e.target.value)}
                placeholder="0"
                className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Up to</span>
              <input
                type="text"
                value={toValue}
                onChange={(e) => onToChange(e.target.value)}
                placeholder="Any"
                className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-black transition-colors"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function SearchBar() {
  const { t } = useI18n();
  const [city, setCity] = useState("Dubai");
  const [year, setYear] = useState(null);

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [kmFrom, setKmFrom] = useState("");
  const [kmTo, setKmTo] = useState("");

  const cityOptions = ["All Cities", "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain"];
  const yearOptions = ["All Years", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">

        {/* CITY */}
        <PillSelector label={t("search.city")} options={cityOptions} value={city} onChange={setCity} placeholder={t("home.breadcrumb.city")} />

        {/* MAKE/MODEL */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">{t("search.makeModel")}</label>
          <input className="w-full h-11 rounded-md border border-gray-300 bg-gray-50 px-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none" placeholder={t("search.makeModelPlaceholder")} />
        </div>

        {/* PRICE RANGE */}
        <RangeSelector
          label={t("search.priceRange")}
          fromValue={priceFrom}
          toValue={priceTo}
          onFromChange={setPriceFrom}
          onToChange={setPriceTo}
          placeholder={t("search.selectPrice")}
        />

        {/* YEAR */}
        <PillSelector label={t("search.year")} options={yearOptions} value={year} onChange={setYear} placeholder={t("search.selectYear")} />

        {/* KILOMETERS */}
        <RangeSelector
          label={t("search.kilometers")}
          fromValue={kmFrom}
          toValue={kmTo}
          onFromChange={setKmFrom}
          onToChange={setKmTo}
          placeholder={t("search.selectRange")}
        />

        {/* FILTERS */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">{t("search.filters")}</label>
          <input className="w-full h-11 rounded-md border border-gray-300 bg-gray-50 px-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none" placeholder={t("search.filtersPlaceholder")} />
        </div>
      </div>
    </div>
  );
}