import { keyframes, mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const themeColors = useTheme()

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

// const growDown = keyframes({
//   '0%': { transform: 'scaleY(0)' },
//   '80%': { transform: 'scaleY(1.1)' },
//   '100%': { transform: 'scaleY(1)' }
// })

export const classes = mergeStyleSets({
  navbar: {
    gridArea: 'nav',
    backgroundColor: themeColors.darkShades,
    color: themeColors.white,
    padding: ' 0.3em',
    height: 'fit-content',
    fontSize: '1.2em',
    textTransform: 'uppercase',
    borderBottom: `0.3em solid ${themeColors.Grey3}`,
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignItems: 'center',
    zIndex: 999,

    '.scrolled': {
      position: 'sticky',
      top: 0,
      left: 0,
      animation: `${fadeIn} 300ms ease-in-out`,
      boxShadow: '0 0 7px rgba(0, 0, 0, 0.65)'
    },

    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridGap: '0em',
      alignItems: 'center',
      justifySelf: 'center',

      li: {
        gridColumnStart: '1 / span 1',
        margin: '0.3em',
        display: 'inline-block',

        label: {
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontFamily: FontFamilies.secondary,
          fontWeight: 400,
          display: 'inline-block',
          marginRight: '0.4em'
        }
      }
    },

    '@media(max-width: 2560px)': {
      fontSize: '1.2em',
      ul: {
        gridTemplateColumns: 'repeat(7, auto)',
        gridTemplateRows: 'minmax(50px, 1fr)',
        justifyItems: 'center',
        li: {
          gridColumnStart: 'span 1'
        }
      }
    },


    '@media(max-width: 1920px)': {
      fontSize: '1.2em',
      ul: {
        gridTemplateColumns: 'repeat(7, auto)',
        gridTemplateRows: 'minmax(50px, 1fr)',
        justifyItems: 'center',
        li: {
          gridColumnStart: 'span 1'
        }
      }
    },

    '@media(max-width: 1366px)': {
      fontSize: '1.2em',
      ul: {
        gridTemplateColumns: 'repeat(7, auto)',
        gridTemplateRows: 'minmax(50px, 1fr)',
        justifyItems: 'center',
        li: {
          gridColumnStart: 'span 1'
        }
      }

    },
    '@media(max-width: 1024px)': {
      fontSize: '1.2em',
      ul: {
        gridTemplateColumns: 'repeat(7, auto)',
        gridTemplateRows: 'minmax(50px, 1fr)',
        justifyItems: 'center',
        li: {
          gridColumnStart: 'span 1'
        }
      }

    },
    '@media(max-width: 768px)': {
      fontSize: '1.2em',
      ul: {
        gridTemplateColumns: 'repeat(65px, auto)',
        gridTemplateRows: 'minmax(50px, 1fr)',
        justifyItems: 'center',
        li: {
          gridColumnStart: 'span 1'
        }
      }
    },

  }
})