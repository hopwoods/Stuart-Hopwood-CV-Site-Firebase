import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"

const theme = useTheme()
export const classes = mergeStyleSets({
  socialIcons: {
    gridColumn: '1 / span 1',
    justifySelf: 'stretch',
    padding: '1em',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 5em)',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    height: 'fit-content',
    margin: '2em 0',
    alignItems: 'center',
    justifyItems: 'center',
    gridAutoFlow: 'dense',

    '.MuiIconButton-root': {
      fontSize: '4rem'
    },

    '.MuiIconButton-colorPrimary:hover': {
      backgroundColor: theme.Grey6
    }
  }
})