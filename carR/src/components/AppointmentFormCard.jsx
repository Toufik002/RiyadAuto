import React, { useMemo, useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function AppointmentFormCard({ onSubmit }) {
    const initialForm = useMemo(
        () => ({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            city: "CASABLANCA",
        }),
        []
    );

    const [form, setForm] = useState(initialForm);
    const [touched, setTouched] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isSending, setIsSending] = useState(false);

    const cities = useMemo(
        () => ["CASABLANCA", "RABAT", "MARRAKECH", "FES", "AGADIR", "AUTRE"],
        []
    );

    // close dropdown if click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const phoneError = useMemo(() => {
        if (!touched.phone) return "";
        const p = (form.phone || "").replace(/\s+/g, "");
        if (!p) return "Veuillez saisir votre numéro.";
        if (!/^\d+$/.test(p)) return "Numéro invalide.";
        if (p.length < 9) return "Numéro trop court.";
        if (p[0] !== "6") return "Le numéro de téléphone doit commencer par 6";
        return "";
    }, [form.phone, touched.phone]);

    const emailError = useMemo(() => {
        if (!touched.email) return "";
        if (!form.email) return "Veuillez saisir votre email.";
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        return ok ? "" : "Email invalide.";
    }, [form.email, touched.email]);

    const canSubmit = useMemo(() => {
        return (
            form.firstName.trim() &&
            form.lastName.trim() &&
            form.phone.trim() &&
            form.email.trim() &&
            !phoneError &&
            !emailError &&
            !isSending
        );
    }, [form, phoneError, emailError, isSending]);

    const setField = (key, value) => setForm((p) => ({ ...p, [key]: value }));

    const submit = (e) => {
        e.preventDefault();

        setTouched({
            firstName: true,
            lastName: true,
            phone: true,
            email: true,
            city: true,
        });

        if (!canSubmit) return;

        setIsSending(true);
        onSubmit?.(form);

        // reset after submit (simple)
        setTimeout(() => {
            setForm(initialForm);
            setTouched({});
            setIsDropdownOpen(false);
            setIsSending(false);
        }, 800);
    };

    return (
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900">Ajoutez vos informations</h3>

            <div className="mt-3 h-[2px] w-16 bg-red-600" />

            <form onSubmit={submit} className="mt-6 space-y-4">
                {/* first/last */}
                <div className="space-y-3">
                    <Input
                        placeholder="Prénom"
                        value={form.firstName}
                        onChange={(v) => setField("firstName", v)}
                        onBlur={() => setTouched((p) => ({ ...p, firstName: true }))}
                    />
                    <Input
                        placeholder="Nom"
                        value={form.lastName}
                        onChange={(v) => setField("lastName", v)}
                        onBlur={() => setTouched((p) => ({ ...p, lastName: true }))}
                    />
                </div>

                {/* phone */}
                <div>
                    <div className="flex overflow-hidden rounded-md border border-slate-200 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-100">
                        <div className="flex items-center border-r border-slate-200 bg-slate-50 px-3 text-sm text-slate-700">
                            +212
                        </div>
                        <input
                            value={form.phone}
                            onChange={(e) => setField("phone", e.target.value)}
                            onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                            placeholder="Téléphone"
                            className="h-11 w-full px-3 text-sm text-slate-900 outline-none"
                            inputMode="numeric"
                        />
                    </div>

                    <p className={`mt-2 text-xs ${phoneError ? "text-red-600" : "text-red-500"}`}>
                        {phoneError || "Le numéro de téléphone doit commencer par 6"}
                    </p>
                </div>

                {/* city */}
                <div className="relative" ref={dropdownRef}>
                    <div
                        onClick={() => setIsDropdownOpen((s) => !s)}
                        className={`flex h-11 w-full cursor-pointer items-center justify-between rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-all hover:border-red-500 ${isDropdownOpen ? "border-red-500 ring-4 ring-red-100" : ""
                            }`}
                    >
                        <span>{form.city}</span>
                        <Icon
                            icon="solar:alt-arrow-down-linear"
                            className={`h-5 w-5 text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                }`}
                        />
                    </div>

                    {isDropdownOpen && (
                        <ul className="absolute left-0 top-[calc(100%+6px)] z-50 w-full overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-xl">
                            {cities.map((city) => (
                                <li
                                    key={city}
                                    onClick={() => {
                                        setField("city", city);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`cursor-pointer px-3 py-2 text-sm transition-colors hover:bg-red-600 hover:text-white ${form.city === city ? "bg-red-50 font-semibold text-red-600" : "text-slate-700"
                                        }`}
                                >
                                    {city}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* email */}
                <div>
                    <Input
                        placeholder="Email"
                        value={form.email}
                        onChange={(v) => setField("email", v)}
                        onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                        type="email"
                    />
                    {emailError && <p className="mt-2 text-xs text-red-600">{emailError}</p>}
                </div>

                {/* submit */}
                <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`mt-2 h-11 w-full rounded-md text-sm font-bold text-white transition-all
            ${canSubmit
                            ? "bg-slate-900 hover:bg-slate-800 shadow-lg shadow-black/20"
                            : "bg-slate-300 cursor-not-allowed"
                        }`}
                >
                    {isSending ? "Envoi en cours..." : "Envoyer"}
                </button>
            </form>
        </div>
    );
}

function Input({ value, onChange, onBlur, placeholder, type = "text" }) {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            type={type}
            className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />
    );
}
