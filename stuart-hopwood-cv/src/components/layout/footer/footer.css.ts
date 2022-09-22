import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies, materialTheme } from "../../../style"

const themeColors = useTheme()
export const classes = mergeStyleSets({
    footer: {
        gridArea: 'footer',
        justifySelf: 'stretch',
        backgroundColor: materialTheme.palette.primary.main,
        color: themeColors.white,
        padding: '0.4em',
        fontSize: '0.9em',
        fontFamily: FontFamilies.primary,
        fontWeight: 300,
        minHeight: '5rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


