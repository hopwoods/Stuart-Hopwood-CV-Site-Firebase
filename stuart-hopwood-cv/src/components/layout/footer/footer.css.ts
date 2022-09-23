import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const theme = useTheme()
export const classes = mergeStyleSets({
    footer: {
        gridArea: 'footer',
        justifySelf: 'stretch',
        backgroundColor: theme.Grey1,
        color: theme.Grey6,
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


