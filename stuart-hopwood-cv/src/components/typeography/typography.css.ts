import { mergeStyleSets } from "@fluentui/merge-styles";

export const typography = mergeStyleSets({
    copy1: {
        lineHeight: '1.75',
        fontSize: '1.15em',
        letterSpacing: '-0.4px'
    },
    copy3: {
        lineHeight: '1.4',
        fontSize: '1.075em',
        letterSpacing: '-0.4px'
    },
    copy2: {
        lineHeight: '1.4',
        fontSize: '1em',
        letterSpacing: '-0.4px'
    },
})