import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { materialTheme } from "../../../style"
import { FontFamilies } from "../../typeography/font-families"

const theme = useTheme()

export const classes = mergeStyleSets({
  about: {
    gridColumn: '1 / span 2',
    margin: 0,
    paddingTop: '7em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto auto auto',
    minHeight: '100vh',
    height: 'fit-content',
    justifySelf: 'stretch',
    placeSelf: 'start center',
    justifyItems: 'center',
    backgroundColor: theme.white,

    h1: {
      gridColumn: '1 / span 2',
      gridRow: '1 / span 1',
      alignSelf: 'center',
      justifySelf: 'center'
    },

    h2: {
      fontFamily: FontFamilies.primary,
      color: materialTheme.palette.primary.main
    },

    'div#profile': {
      gridColumn: ' 1 / span 1',
      gridRow: '3 / span 1'
    },
    'div#skills': {
      gridColumn: '2 / span 1',
      gridRow: '3 / span 1'
    }
  }
})