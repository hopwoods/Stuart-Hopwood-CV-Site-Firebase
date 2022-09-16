import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const themeColors = useTheme()
export const classes = mergeStyleSets({
  container: {
    fontFamily: FontFamilies.primary,
    fontWeight: 400,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    color: themeColors.text,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
      banner
      nav
      content
      footer
    `,
    gridGap: '0em',
    height: 'fit-content',
    lineHeight: 1.5,
    fontSize: '1rem',
    'h1, h2,h3,h4,h5,h6': {
      fontFamily: FontFamilies.secondary,
      fontWeight: 300,
      color: themeColors.text,
      lineHeight: 1.25,
    },
    h1: {
      fontWeight: 500,
      borderBottom: ' solid 3px',
      paddingBttom: '0.15em',
      textTransform: 'uppercase'
    },
    'h1.inverse, h2.inverse, h3.inverse, h4.inverse, h5.inverse, h6.inverse': {
      color: themeColors.white
    },
    '@media(max-width: 2560px)': {
      fontSize: '1.3rem'
    },
    '@media(max-width: 1920px)': {
      fontSize: '1rem'

    },
    '@media(max-width: 1366px)': {
      fontSize: '1rem'

    },
    '@media(max-width: 1024px)': {
      fontSize: '1rem'

    },
    '@media(max-width: 768px)': {
      fontSize: '1rem'
    },
  }
})
