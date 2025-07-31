export const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                bounce: 0.3,
                duration: 0.6,
            },
        },
    },
}