import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../../Hooks"

const themeColors = useTheme()

export const classes = mergeStyleSets({
  icon: {
    userSelect: 'none',
    gridColum: '1 / span 1',
    justifySelf: 'stretch',
    display: 'grid',
    gridTemplateColumns: '1.5em auto',
    gridTemplateRows: 'auto',
    gridGap: '0rem',
    height: 'fit-content',
    alignItems: 'center',
    padding: 0,
    marginBottom: '0.25rem',
    color: themeColors.Grey12,
    span: {
      fontSize: '0.8rem',
      display: 'inline-block',
      marginLeft: '0.6rem',
      a: {
        color: themeColors.hotpink,
        textDecoration: 'none',
        ':hover': {
          //color: themeColors.Grey12
        }
      }
    }
  }
})