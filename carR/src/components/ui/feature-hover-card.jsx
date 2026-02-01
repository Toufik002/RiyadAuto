import React from "react";
import { motion } from "framer-motion";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export function FeatureHoverCard({ title, icon, description, className }) {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.97, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.35,
                ease: "easeOut",
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 14 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
                "group relative w-full h-full min-h-[260px] rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl",
                "hover:border-red-500",
                className
            )}
        >
            {/* ✅ Red Glow Shadow Hover */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition-all duration-300 group-hover:ring-4 group-hover:ring-red-200" />

            <div className="relative flex h-full flex-col items-center justify-center text-center gap-4">
                {/* ✅ Icon */}
                {icon && <motion.div variants={itemVariants}>{icon}</motion.div>}

                {/* ✅ Title */}
                <motion.h3
                    variants={itemVariants}
                    className="text-xl font-bold text-slate-900"
                >
                    {title}
                </motion.h3>

                {/* ✅ Description */}
                {description && (
                    <motion.p
                        variants={itemVariants}
                        className="text-sm leading-relaxed text-slate-500"
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
}
