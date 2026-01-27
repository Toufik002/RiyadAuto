import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// cn بسيطة
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

/**
 * Props:
 * - orderId, paymentMethod, dateTime, totalAmount (string)
 * - onGoToAccount (function)
 * - title, buttonText (optional)
 * - icon (optional ReactNode)
 * - className (optional)
 */
export function OrderConfirmationCard({
    title,
    icon,
    details = [],
    description,
    buttonText,
    onButtonClick,
    buttonVariant = "filled", // 'filled' | 'outline'
    hoverColor = "default", // 'red' | 'green' | 'blue' | 'default'
    className,
}) {
    // Map hover colors to specific border and button styles
    const colorStyles = {
        red: {
            border: "hover:border-red-500",
            button: "hover:border-red-500",
            title: ""
        },
        green: {
            border: "hover:border-green-500",
            button: "hover:border-green-500",
            title: ""
        },
        blue: {
            border: "hover:border-blue-500",
            button: "hover:border-blue-500",
            title: ""
        },
        default: {
            border: "hover:border-slate-400",
            button: "hover:bg-slate-50",
            title: ""
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };

    const activeStyle = colorStyles[hoverColor] || colorStyles.default;

    return (
        <AnimatePresence>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                aria-live="polite"
                className={cn(
                    "group w-full h-full flex flex-col justify-between min-h-[400px] rounded-xl border bg-white text-slate-900 shadow-lg p-6 hover:shadow-xl transition-all duration-300",
                    activeStyle.border,
                    className
                )}
            >
                <div className="flex flex-col items-center space-y-4 text-center">
                    {/* Icon */}
                    <motion.div variants={itemVariants}>{icon}</motion.div>

                    {/* Title */}
                    <motion.h2 variants={itemVariants} className={cn("text-xl font-bold transition-colors duration-300", activeStyle.title)}>
                        {title}
                    </motion.h2>

                    {/* Description */}
                    {description && (
                        <motion.p variants={itemVariants} className="text-slate-500 text-sm">
                            {description}
                        </motion.p>
                    )}

                    {/* Details */}
                    {details.length > 0 && (
                        <motion.div variants={itemVariants} className="w-full space-y-3 pt-2">
                            {details.map((item, index) => (
                                <div
                                    key={item.label || index}
                                    className={cn(
                                        "flex items-center justify-between border-b pb-3 text-sm text-slate-500",
                                        index === details.length - 1 ? "border-none pb-0" : "",
                                        item.isBold ? "font-bold text-slate-900" : ""
                                    )}
                                >
                                    <span>{item.label}</span>
                                    <span className={cn(item.isBold ? "text-lg" : "")}>{item.value}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Button */}
                {buttonText && (
                    <motion.div variants={itemVariants} className="w-full pt-4 mt-auto">
                        <button
                            type="button"
                            onClick={onButtonClick}
                            className={cn(
                                "w-full h-12 rounded-md font-semibold transition-all duration-300",
                                buttonVariant === "outline"
                                    ? cn("border-2 border-slate-900 text-slate-900", activeStyle.button)
                                    : "bg-slate-900 text-white hover:bg-slate-800"
                            )}
                        >
                            {buttonText}
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}