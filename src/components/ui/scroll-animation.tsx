"use client";
import React from "react";
import { motion, useInView, Variants, MotionProps } from "framer-motion";

interface ScrollElementProps extends React.PropsWithChildren {
    viewport?: MotionProps["viewport"];
    variants?: Variants;
    className?: string;
    delay?: number;
}

export default function ScrollElement({
    children,
    viewport,
    variants,
    className,
    delay = 0,
}: ScrollElementProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
        once: viewport?.once ?? true,
        margin: (typeof viewport?.margin === 'string' ? viewport.margin : undefined) as any,
        amount: viewport?.amount,
    });

    const defaultVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants || defaultVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
