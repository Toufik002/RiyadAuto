import React, { useMemo, useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function AppointmentModal({ open, onClose, onSubmit }) {
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

    // ✅ Toast (fixed on body)
    const [showToast, setShowToast] = useState(false);
    const [toastPhase, setToastPhase] = useState("in"); // "in" | "out"
    const [isSending, setIsSending] = useState(false);

    // ✅ Keep timeout ids
    const timersRef = useRef([]);

    const cities = useMemo(
        () => ["CASABLANCA", "RABAT", "MARRAKECH", "FES", "AGADIR", "AUTRE"],
        []
    );

    const clearAllTimers = () => {
        timersRef.current.forEach((t) => clearTimeout(t));
        timersRef.current = [];
    };

    // ✅ Reset form inputs
    const resetForm = () => {
        setForm(initialForm);
        setTouched({});
        setIsDropdownOpen(false);
    };

    // ✅ Close toast (X) — and also close modal
    const closeToast = () => {
        clearAllTimers();
        setToastPhase("out");

        timersRef.current.push(
            setTimeout(() => {
                setShowToast(false);
                setToastPhase("in");
                setIsSending(false);

                // ✅ close modal + reset inputs
                resetForm();
                onClose?.();
            }, 350)
        );
    };

    // ✅ close dropdown if click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ✅ cleanup timers on unmount
    useEffect(() => {
        return () => clearAllTimers();
    }, []);

    // ✅ reset when modal closes
    useEffect(() => {
        if (!open) {
            clearAllTimers();
            setShowToast(false);
            setIsSending(false);
            setToastPhase("in");
            resetForm();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

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

    if (!open) return null;

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

        clearAllTimers();

        // ✅ empty inputs مباشرة بعد الكليك
        resetForm();

        setIsSending(true);
        onSubmit?.(form);

        setShowToast(true);
        setToastPhase("in");

        timersRef.current.push(
            setTimeout(() => {
                setToastPhase("out");
            }, 2400)
        );

        timersRef.current.push(
            setTimeout(() => {
                setShowToast(false);
            }, 3000)
        );

        timersRef.current.push(
            setTimeout(() => {
                setIsSending(false);
                onClose?.();
            }, 3100)
        );
    };

    return (
        <>
            {/* ✅ Toast in BODY (fixed) */}
            {showToast && (
                <div className="fixed inset-0 z-[9999] grid place-items-center">
                    {/* blur everything behind */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

                    <div
                        className={`relative mx-4 w-full max-w-md rounded-3xl border border-white/50 bg-white/75 p-6 shadow-2xl backdrop-blur-xl
            transition-all duration-500 ease-out
            ${toastPhase === "in"
                                ? "scale-100 opacity-100 translate-y-0"
                                : "scale-95 opacity-0 translate-y-2"
                            }`}
                    >
                        {/* ✅ X button (red text only, no bg) */}
                        <button
                            type="button"
                            onClick={closeToast}
                            aria-label="Close toast"
                            className="absolute right-4 top-4 text-red-600 hover:text-red-700 text-xl font-bold leading-none"
                        >
                            ×
                        </button>

                        <div className="flex items-start gap-4">
                            {/* ✅ RED THEME + SUCCESS ICON */}
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15">
                                <Icon
                                    icon="solar:check-circle-bold-duotone"
                                    className="h-8 w-8 text-red-600"
                                />
                            </span>

                            <div className="flex-1">
                                <p className="text-lg font-extrabold text-slate-900">
                                    Envoyé avec succès
                                </p>
                                <p className="mt-1 text-sm text-slate-700">
                                    a envoyez avec succes
                                </p>

                                {/* progress */}
                                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                                    <div className="h-full w-full animate-[bar_2.4s_linear_forwards] rounded-full bg-red-600" />
                                </div>

                                <style>{`
                  @keyframes bar {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-100%); }
                  }
                `}</style>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal wrapper */}
            <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
                {/* overlay */}
                <button
                    onClick={() => {
                        if (!isSending) onClose?.();
                    }}
                    className="absolute inset-0 bg-black/40"
                    aria-label="Close overlay"
                />

                {/* modal */}
                <div className="relative z-[1000] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                    {/* close */}
                    <button
                        onClick={() => {
                            if (!isSending) onClose?.();
                        }}
                        disabled={isSending}
                        className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50"
                        aria-label="Close"
                    >
                        <Icon icon="solar:close-circle-linear" className="h-5 w-5" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* LEFT PANEL */}
                        <div className="bg-slate-950 px-8 py-10 text-white">
                            <h2 className="text-3xl font-bold leading-tight">
                                Formulaire de prise <br /> de rendez vous
                            </h2>

                            <ul className="mt-10 space-y-6 text-sm leading-relaxed">
                                {[
                                    "Vendez votre voiture rapidement, en toute sécurité.",
                                    "Nous vous conseillons un prix de vente adapté à l’état du véhicule et à la valeur de marché.",
                                    "Nous faisons la publicité de votre voiture et nous gérons les offres des acheteurs.",
                                    "Nous effectuons la visite technique du véhicule et nous vérifions la solvabilité de l’acheteur.",
                                    "Paiement sécurisé par chèque ou par virement bancaire.",
                                ].map((txt, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                                            <Icon
                                                icon="solar:check-circle-bold"
                                                className="h-3 w-3 text-white"
                                            />
                                        </span>
                                        <span className="opacity-90">{txt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="px-8 py-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Ajoutez vos informations
                                </h3>
                                <div className="mt-3 h-[2px] w-16 bg-red-600" />
                            </div>

                            <form onSubmit={submit} className="space-y-5">
                                {/* Names */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <Input
                                        placeholder="Prénom"
                                        value={form.firstName}
                                        onChange={(v) => setField("firstName", v)}
                                        onBlur={() =>
                                            setTouched((p) => ({ ...p, firstName: true }))
                                        }
                                    />
                                    <Input
                                        placeholder="Nom"
                                        value={form.lastName}
                                        onChange={(v) => setField("lastName", v)}
                                        onBlur={() =>
                                            setTouched((p) => ({ ...p, lastName: true }))
                                        }
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <div className="flex overflow-hidden rounded-lg border border-slate-200 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-100">
                                        <div className="flex items-center gap-2 border-r border-slate-200 bg-slate-50 px-4 text-sm text-slate-700">
                                            +212
                                        </div>
                                        <input
                                            value={form.phone}
                                            onChange={(e) => setField("phone", e.target.value)}
                                            onBlur={() =>
                                                setTouched((p) => ({ ...p, phone: true }))
                                            }
                                            placeholder="Téléphone"
                                            className="h-12 w-full px-4 text-sm text-slate-900 outline-none"
                                            inputMode="numeric"
                                        />
                                    </div>
                                    {phoneError ? (
                                        <p className="mt-2 text-xs text-red-600">{phoneError}</p>
                                    ) : (
                                        <p className="mt-2 text-xs text-red-500">
                                            Le numéro de téléphone doit commencer par 6
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <Input
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={(v) => setField("email", v)}
                                        onBlur={() =>
                                            setTouched((p) => ({ ...p, email: true }))
                                        }
                                        type="email"
                                    />
                                    {emailError && (
                                        <p className="mt-2 text-xs text-red-600">{emailError}</p>
                                    )}
                                </div>

                                {/* City Dropdown */}
                                <div className="relative" ref={dropdownRef}>
                                    <div
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={`flex h-12 w-full cursor-pointer items-center justify-between rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all hover:border-red-500 ${isDropdownOpen ? "border-red-500 ring-4 ring-red-100" : ""
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
                                        <ul className="absolute left-0 top-[calc(100%+4px)] z-50 w-full overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-xl">
                                            {cities.map((city) => (
                                                <li
                                                    key={city}
                                                    onClick={() => {
                                                        setField("city", city);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`cursor-pointer px-4 py-2.5 text-sm transition-colors hover:bg-red-600 hover:text-white ${form.city === city
                                                            ? "bg-red-50 font-semibold text-red-600"
                                                            : "text-slate-700"
                                                        }`}
                                                >
                                                    {city}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={!canSubmit}
                                    className={`h-12 w-full rounded-lg px-6 text-sm font-bold text-white transition-all
                    ${canSubmit
                                            ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/30"
                                            : "bg-slate-300 cursor-not-allowed"
                                        }`}
                                >
                                    {isSending ? "Envoi en cours..." : "Confirmer le rendez-vous"}
                                </button>

                                <p className="text-center text-xs text-slate-500">
                                    En envoyant ce formulaire, vous acceptez d’être contacté par notre équipe.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
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
            className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />
    );
}
