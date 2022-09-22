import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../Hooks"

const themeColors = useTheme()
export const gridClasses = mergeStyleSets({
  grid: {
    backgroundColor: themeColors.white,
    gridColumn: '1 / span 1',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '0.34fr 0.4fr',
    gridTemplateRows: 'auto',
    gridGap: '5rem',
    justifySelf: 'stretch',
    justifyItems: 'start',
    alignSelf: 'stretch',
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
