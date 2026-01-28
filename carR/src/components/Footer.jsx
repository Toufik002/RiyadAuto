import React from "react";
import {
    MessageSquareMore,
    Phone,
    MessageCircle,
    MapPin,
    Mail,
    Clock,
    Facebook,
    Twitter,
    Youtube,
    Linkedin,
    Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            {/* Floating Chat Button (Bottom Left) */}
            <div className="fixed bottom-6 left-6 z-50">
                <a
                    href="https://wa.me/212701070727"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-red-600 hover:bg-red-700 text-white p-3.5 rounded-full shadow-xl transition-all hover:scale-105 flex items-center justify-center"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageSquareMore className="w-7 h-7" strokeWidth={1.5} />
                </a>
            </div>

            {/* Main Footer */}
            <footer className="bg-slate-950 text-white w-full border-t border-slate-800">
                <div className="mx-auto max-w-[90rem] px-6 py-12 lg:px-12 lg:pt-16 lg:pb-8">
                    {/* Top Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-16">
                        {/* Brand */}
                        <div className="lg:col-span-3 pr-4">
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/15">
                                <span className="font-extrabold text-white">R</span>
                            </div>

                            <p className="text-white/70 text-base leading-relaxed font-normal">
                                RiyadAuto vous aide à acheter et vendre des voitures d&apos;occasion
                                en toute simplicité. Annonces fiables, contact rapide et expérience
                                fluide.
                            </p>

                            {/* accent line */}
                            <div className="mt-6 h-1 w-16 rounded-full bg-red-600" />
                        </div>

                        {/* Contact */}
                        <div className="lg:col-span-3">
                            <h3 className="text-xl font-semibold tracking-tight text-white mb-6">
                                Contact
                            </h3>

                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="tel:+212522112727"
                                        className="flex items-center gap-3 text-white/75 hover:text-white transition-colors group"
                                    >
                                        <Phone
                                            className="w-5 h-5 text-white/50 group-hover:text-red-500 transition-colors"
                                            strokeWidth={1.5}
                                        />
                                        <span className="text-base font-normal">05 22 11 27 27</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://wa.me/212701070727"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="flex items-center gap-3 text-white/75 hover:text-white transition-colors group"
                                    >
                                        <MessageCircle
                                            className="w-5 h-5 text-white/50 group-hover:text-green-500 transition-colors"
                                            strokeWidth={1.5}
                                        />
                                        <span className="text-base font-normal">07 01 07 07 27</span>
                                    </a>
                                </li>

                                <li className="flex items-start gap-3 text-white/75">
                                    <MapPin className="w-5 h-5 text-white/50 mt-1" strokeWidth={1.5} />
                                    <span className="text-base font-normal leading-snug">
                                        Casablanca, Maroc
                                    </span>
                                </li>

                                <li>
                                    <a
                                        href="mailto:contact@riyadauto.ma"
                                        className="flex items-center gap-3 text-white/75 hover:text-white transition-colors group"
                                    >
                                        <Mail
                                            className="w-5 h-5 text-white/50 group-hover:text-red-500 transition-colors"
                                            strokeWidth={1.5}
                                        />
                                        <span className="text-base font-normal">contact@riyadauto.ma</span>
                                    </a>
                                </li>

                                <li className="flex items-center gap-3 text-white/75">
                                    <Clock className="w-5 h-5 text-white/50" strokeWidth={1.5} />
                                    <span className="text-base font-normal">
                                        Lun - Sam : 09:30 - 19:00
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Locations */}
                        <div className="lg:col-span-2 pt-2">
                            <h4 className="text-sm font-semibold text-white mb-4">Villes</h4>
                            <ul className="space-y-3">
                                {[
                                    "Casablanca",
                                    "Rabat",
                                    "Tanger",
                                    "Marrakech",
                                    "Agadir",
                                    "Fès",
                                ].map((city) => (
                                    <li key={city}>
                                        <a
                                            href="#"
                                            className="text-white/60 hover:text-white transition-colors text-sm"
                                        >
                                            Voiture à {city}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Brands 1 */}
                        <div className="lg:col-span-2 pt-2">
                            <h4 className="text-sm font-semibold text-white mb-4">Marques</h4>
                            <ul className="space-y-3">
                                {[
                                    "Mercedes-Benz",
                                    "Volkswagen",
                                    "Audi",
                                    "BMW",
                                    "Kia",
                                    "Land Rover",
                                    "Fiat",
                                ].map((b) => (
                                    <li key={b}>
                                        <a
                                            href="#"
                                            className="text-white/60 hover:text-white transition-colors text-xs tracking-wide uppercase font-medium"
                                        >
                                            {b} occasion
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Brands 2 */}
                        <div className="lg:col-span-2 pt-2">
                            <h4 className="text-sm font-semibold text-white mb-4">Plus</h4>
                            <ul className="space-y-3">
                                {[
                                    "Renault",
                                    "Peugeot",
                                    "Opel",
                                    "Ford",
                                    "Jeep",
                                    "Hyundai",
                                    "Skoda",
                                ].map((b) => (
                                    <li key={b}>
                                        <a
                                            href="#"
                                            className="text-white/60 hover:text-white transition-colors text-xs tracking-wide uppercase font-medium"
                                        >
                                            {b} occasion
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/10 mb-8" />

                    {/* Nav Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-8">
                        <Link className="text-white/80 hover:text-white transition-colors text-base font-medium" to="/">
                            Accueil
                        </Link>
                        <Link className="text-white/80 hover:text-white transition-colors text-base font-medium" to="/buy">
                            Acheter
                        </Link>
                        <Link className="text-white/80 hover:text-white transition-colors text-base font-medium" to="/sell">
                            Vendre
                        </Link>
                        <Link className="text-white/80 hover:text-white transition-colors text-base font-medium" to="/about">
                            À propos
                        </Link>
                        <Link className="text-white/80 hover:text-white transition-colors text-base font-medium" to="/contact">
                            Contact
                        </Link>
                        <Link className="text-white/80 hover:text-white transition-colors text-base font-medium" to="/privacy">
                            Politique de confidentialité
                        </Link>
                    </nav>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/10 mb-8" />

                    {/* Bottom */}
                    <div className="flex flex-col items-center gap-6">
                        <span className="text-white/50 text-sm font-normal">
                            © {new Date().getFullYear()} RiyadAuto
                        </span>

                        <div className="flex items-center gap-6">
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Twitter, label: "Twitter" },
                                { Icon: Youtube, label: "YouTube" },
                                { Icon: Linkedin, label: "LinkedIn" },
                                { Icon: Instagram, label: "Instagram" },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="text-white/55 hover:text-red-500 transition-colors"
                                >
                                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>

                        {/* little badge */}
                        <div className="text-xs text-white/40">
                            Built with{" "}
                            <span className="text-white/70 font-semibold">RiyadAuto</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
