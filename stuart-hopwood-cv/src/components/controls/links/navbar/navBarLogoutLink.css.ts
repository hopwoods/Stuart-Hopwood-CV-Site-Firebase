import { keyframes, mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from "../../../../Hooks"
import { FontFamilies } from "../../../../style"

const themeColors = useTheme()
const colorChange = keyframes({
  '0%': { color: themeColors.white },
  // '50%': { color: '#ff8fc7' },
  '100%': { color: themeColors.hotpink }
})

export const classes = mergeStyleSets({
  logoutLink: {
    display: 'block',
    marginLeft: '0.5em',
    marginRight: '0.5em',
    textAlign: 'center',
    position: 'relative',
    color: themeColors.white,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: FontFamilies.secondary,
    fontWeight: 300,
    cursor: 'pointer',
    ':hover': {
      animation: colorChange,
      animationDuration: '0.75s',
      animationFillMode: 'both'
    }
  }
})