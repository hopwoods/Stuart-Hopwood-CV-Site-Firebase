import { mergeStyleSets } from "@fluentui/merge-styles";
import { useTheme } from "../../../Hooks/useTheme";

const theme = useTheme()
export const classes = mergeStyleSets({
    skillsTable: {
        gridColumn: '1 / span 1',
        gridRow: '2 / span 1',
        justifySelf: 'stretch',
        marginBottom: '1rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto'
    },
    cellExample: {
        display: 'block',
        margin: '0.25em',
        marginRight: '0.5em',
        lineHeight: '1.5em',
        backgroundColor: theme.Grey6,
        color: theme.text,
        borderRadius: '5px',
        padding: '0.25em 0.5em 0.25em 0.5em'
    }
})
