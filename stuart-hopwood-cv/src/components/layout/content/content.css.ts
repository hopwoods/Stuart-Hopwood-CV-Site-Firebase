import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../typeography/font-families"

const theme = useTheme()

export const classes = mergeStyleSets({
  content: {
    gridArea: 'content',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    minHeight: '64.6vh',
    justifySelf: 'stretch',
    backgroundColor: theme.primaryShades,
    fontFamily: FontFamilies.primary,
    fontSize: '1.2rem'
  }
})
