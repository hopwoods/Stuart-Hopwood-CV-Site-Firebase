import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../../Hooks"

const themeColors = useTheme()

export const classes = mergeStyleSets({
  icon: {
    gridColum: '1 / span 1',
    justifySelf: 'stretch',
    display: 'grid',
    gridTemplateColumns: '1.5em auto',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    height: 'fit-content',
    alignItems: 'center',
    padding: 0,
    margin: '0.3em 0',
    span: {
      display: 'inline - block',
      marginLeft: '0.4em',
      a: {
        color: themeColors.darkAccent,
        textDecoration: 'none',

        ':hover': {
          color: themeColors.hotpink
        }
      }
    }
  }
})