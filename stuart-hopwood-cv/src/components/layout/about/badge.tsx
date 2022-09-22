import { domAnimation, LazyMotion, m, Variants } from "framer-motion";
import { classes } from "./badge.css";

export type BadgeProps = {
    children: React.ReactNode
}

const badgeVariants: Variants = {
    offscreen: {
        x: -300,
        rotate: 90
    },
    onscreen: {
        x: 50,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export function Badge({ children }: BadgeProps) {
    return <LazyMotion features={domAnimation}>
        <m.div variants={badgeVariants} transition={{ duration: 1.4 }} className={classes.badge}>
            {children}
        </m.div>
    </LazyMotion>
}