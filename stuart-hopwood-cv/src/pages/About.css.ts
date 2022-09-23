import { mergeStyleSets } from "@fluentui/merge-styles"
import { FontFamilies } from "../components/typeography/font-families"
import { useTheme } from "../Hooks"
import { materialTheme } from "../style"

const theme = useTheme()

export const classes = mergeStyleSets({
  about: {
    gridColumn: '1 / span 2',
    margin: 0,
    paddingTop: '7em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
    minHeight: '100vh',
    height: 'fit-content',
    justifySelf: 'stretch',
    placeSelf: 'start center',
    justifyItems: 'center',
    backgroundColor: theme.white,

    h1: {
      gridColumn: '1 / span 2',
      alignSelf: 'start',
      justifySelf: 'center',
      fontFamily: FontFamilies.primary,
      color: materialTheme.palette.primary.main
    },

    h2: {
      fontFamily: FontFamilies.primary,
      color: materialTheme.palette.primary.main
    },

    '#badges': {
      gridColumn: ' 1 / span 2',
      gridRow: '2 / span 1'
    },

    '#profile': {
      gridColumn: ' 1 / span 1',
      gridRow: '3 / span 1'
    },
    '#skills': {
      gridColumn: '2 / span 1',
      gridRow: '3 / span 1'
    }
  }
})