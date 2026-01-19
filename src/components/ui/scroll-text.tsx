"use client";
import React from "react";
import { motion, useInView, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface TextAnimationProps {
    text: string;
    classname?: string;
    variants?: Variants;
    direction?: Direction;
    letterAnime?: boolean;
    lineAnime?: boolean;
    as?: React.ElementType;
}

export default function TextAnimation({
    text,
    classname,
    variants,
    direction = "up",
    letterAnime = false,
    lineAnime = false,
    as: Component = "h2",
}: TextAnimationProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const defaultVariants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const computedVariants = variants || defaultVariants;

    if (letterAnime) {
        return (
            <Component ref={ref} className={classname}>
                <motion.span
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.05 }}
                    aria-hidden
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={computedVariants}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="sr-only">{text}</span>
            </Component>
        );
    }

    if (lineAnime) {
        // Simple line split by words for now as "line" is hard to determine without resize observer
        return (
            <Component ref={ref} className={classname}>
                <motion.span
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                    aria-hidden
                >
                    {text.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            variants={computedVariants}
                            className="inline-block mr-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="sr-only">{text}</span>
            </Component>
        );
    }

    return (
        <Component ref={ref} className={classname}>
            <motion.span
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={computedVariants}
            >
                {text}
            </motion.span>
        </Component>
    );
}
