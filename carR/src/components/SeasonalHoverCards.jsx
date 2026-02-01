import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function SeasonCard({ title, description, icon, color }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm hover:shadow-md transition"
        >
            {/* ✅ Circle Icon */}
            <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: color }}
            >
                <Icon icon={icon} className="h-8 w-8 text-white" />
            </div>

            {/* ✅ Title */}
            <h3 className="mt-6 text-lg font-bold text-slate-900">{title}</h3>

            {/* ✅ Description */}
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {description}
            </p>
        </motion.div>
    );
}

export function SeasonalHoverCards({ cards }) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, idx) => (
                <SeasonCard key={idx} {...card} />
            ))}
        </div>
    );
}
