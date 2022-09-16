import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const themeColors = useTheme()
export const classes = mergeStyleSets({
    footer: {
        gridArea: 'footer',
        justifySelf: 'stretch',
        backgroundColor: themeColors.Grey1,
        borderTop: `3px solid ${themeColors.darkShades}`,
        color: themeColors.white,
        padding: '0.4em',
        fontSize: '0.9em',
        fontFamily: FontFamilies.primary,
        fontWeight: 300
    }
})


