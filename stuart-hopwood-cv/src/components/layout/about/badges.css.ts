import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const themeColors = useTheme()

export const classes = mergeStyleSets({
  badges: {
    marginTop: '5rem',
    marginBottom: '10rem',
    padding: '1em',
    color: themeColors.text,
    fontSize: '2rem',
    height: 'fit-content',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 0.25fr)',
    gridTemplateRows: 'repeat(1, 10rem)',
    gridGap: '6em',
    justifyItems: 'center',
    alignItems: 'center',
    fontFamily: FontFamilies.secondary,
    fontWeight: 100
  }
})
