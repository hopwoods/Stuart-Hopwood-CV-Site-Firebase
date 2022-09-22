import { mergeStyleSets } from "@fluentui/merge-styles";
import { domAnimation, LazyMotion, m, Variants } from "framer-motion";
import * as React from "react";

export type AccordionContentProps = {
    children: React.ReactNode
    variants: Variants
}

const classes = mergeStyleSets({
    accordionContent: {

    }
})

export function AccordionContent({ children, variants }: AccordionContentProps) {
    return <LazyMotion features={domAnimation}>
        <m.div variants={variants}>{children}</m.div>
    </LazyMotion>
}
