import React, { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

// cn بسيطة (بدون shadcn utils)
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = "horizontal", // 'horizontal' | 'vertical'
    reverse = false,
    className,
}) {
    const [currentDuration, setCurrentDuration] = useState(duration);
    const [ref, bounds] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    const size = direction === "horizontal" ? bounds.width : bounds.height;
    const contentSize = size + gap;

    useEffect(() => {
        if (!contentSize || !Number.isFinite(contentSize)) return;

        let controls;

        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        if (isTransitioning) {
            controls = animate(translation, [translation.get(), to], {
                ease: "linear",
                duration:
                    currentDuration *
                    Math.abs((translation.get() - to) / (contentSize || 1)),
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((k) => k + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: "linear",
                duration: currentDuration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [
        key,
        translation,
        currentDuration,
        contentSize,
        gap,
        isTransitioning,
        direction,
        reverse,
    ]);

    const hoverProps = durationOnHover
        ? {
            onHoverStart: () => {
                setIsTransitioning(true);
                setCurrentDuration(durationOnHover);
            },
            onHoverEnd: () => {
                setIsTransitioning(true);
                setCurrentDuration(duration);
            },
        }
        : {};

    return (
        <div className={cn("overflow-hidden", className)}>
            <motion.div
                ref={ref}
                className="flex w-max"
                style={{
                    ...(direction === "horizontal"
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === "horizontal" ? "row" : "column",
                }}
                {...hoverProps}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}