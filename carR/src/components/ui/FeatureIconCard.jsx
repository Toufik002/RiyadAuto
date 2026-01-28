import React from "react";
import { motion } from "framer-motion";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export function FeatureIconCard({ icon, title, description, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className={cn("flex flex-col items-center text-center", className)}
        >
            <div className="mb-4">{icon}</div>

            <h3 className="text-lg font-bold text-slate-800">{title}</h3>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                {description}
            </p>
        </motion.div>
    );
}
