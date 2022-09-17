import { mergeStyleSets } from "@fluentui/merge-styles";

export const typography = mergeStyleSets({
    copy: {
        lineHeight: '1.75',
        fontSize: '1.15em',
        letterSpacing: '-0.4px'
    },
    subCopy: {
        lineHeight: '1.4',
        fontSize: '1.075em',
        letterSpacing: '-0.4px'
    },
})