import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../Hooks"

const themeColors = useTheme()
export const classes = mergeStyleSets({
  login: {
    backgroundColor: themeColors.white,
    gridColumn: '1 / span 1',
    padding: '1em',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    alignSelf: 'stretch',
    justifySelf: 'stretch',
    justifyItems: 'center',
    alignItems: 'start',

    a: {
      color: themeColors.darkAccent,
      textDecoration: 'none',

      ':hover': {
        color: themeColors.hotpink
      }
    }
  }
})
