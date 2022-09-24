import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"

const themeColors = useTheme()
export const classes = mergeStyleSets({
  adminMenu: {
    gridColumn: '1 / span 1',
    padding: '1em',
    display: 'grid',
    griTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(5, auto)',
    gridGap: '0em',
    height: 'fit-content',
    justifyItems: 'start',
    justifySelf: 'end',
    alignItems: 'center',
    a: {
      color: themeColors.darkAccent,
      textDecoration: 'none',
      ':hover': {
        color: themeColors.brandAccentColor
      }
    }
  },
  drawerStyle: {
    gridColumn: '1 / span 1',
    height: 'fit-content',
    width: '100%',
    justifySelf: 'center'
  }
})