import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const themeColors = useTheme()

export const classes = mergeStyleSets({
  badges: {
    marginTop: '5rem',
    marginBottom: '5rem',
    gridColumn: '1 / span 2',
    gridRow: '1 / span 1',
    padding: '1em',
    color: themeColors.text,
    fontSize: '2rem',
    height: 'fit-content',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 10rem)',
    gridTemplateRows: 'repeat(1, 10rem)',
    gridGap: '6em',
    justifyItems: 'center',
    alignItems: 'center',
    fontFamily: FontFamilies.secondary,
    fontWeight: 100
  }
})
