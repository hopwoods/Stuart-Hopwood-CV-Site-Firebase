import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const themeColors = useTheme()

export const classes = mergeStyleSets({
  badge: {
    marginTop: '5rem',
    gridColumn: '1 / span 2',
    gridRow: '2 / span 1',
    padding: '1em',
    color: themeColors.text,
    fontSize: '2rem',
    justifySelf: 'stretch',
    alignSelf: 'stretch',
    height: 'fit-content',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 0.25fr)',
    gridTemplateRows: 'repeat(2, 0.5fr)',
    gridRowGap: '3em',
    justifyItems: 'center',
    alignItems: 'center',
    fontFamily: FontFamilies.secondary,
    fontWeight: 100
  }
})
