import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const LANGS = [
    { code: "ar", labelKey: "language.ar", badge: "AR" },
    { code: "fr", labelKey: "language.fr", badge: "FR" },
    { code: "en", labelKey: "language.en", badge: "EN" }, // optional but helpful
  ];

  const current = LANGS.find((l) => l.code === lang) || LANGS[1];

  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const changeLang = (code) => {
    setLang(code);
    setOpen(false);
  };

  const navItems = [
    { key: "nav.home", to: "/" },
    { key: "nav.buy", to: "/buy" },
    { key: "nav.sell", to: "/sell" },
    { key: "nav.about", to: "/about" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {t("brand.name")}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                className={({ isActive }) =>
                  "font-medium transition-colors " +
                  (isActive ? "text-red-600" : "text-gray-700 hover:text-red-600")
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          {/* Language */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
                         text-white font-semibold px-4 py-2 rounded-lg shadow-lg shadow-red-500/30
                         flex items-center gap-2"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              <span className="inline-flex items-center justify-center w-9 h-7 rounded-md bg-white/15 border border-white/20 text-sm font-bold">
                {current.badge}
              </span>
              <span className="hidden sm:inline">{t(current.labelKey)}</span>
              <svg
                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500">
                  {t("language.title")}
                </div>

                <div className="py-1">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLang(l.code)}
                      className={`w-full px-4 py-2 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors ${current.code === l.code ? "bg-gray-50" : ""
                        }`}
                      type="button"
                    >
                      <span className="inline-flex items-center justify-center w-9 h-7 rounded-md bg-gray-100 border border-gray-200 text-sm font-bold text-gray-800">
                        {l.badge}
                      </span>
                      <span className="font-medium text-gray-800">{t(l.labelKey)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
