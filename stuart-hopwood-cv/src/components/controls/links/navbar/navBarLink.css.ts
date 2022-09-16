import { keyframes, mergeStyleSets } from '@fluentui/merge-styles';
import { useTheme } from '../../../../Hooks/useTheme';
import { FontFamilies } from '../../../typeography/font-families';


const themeColors = useTheme();

const colorChange = keyframes({
  '0%': { color: themeColors.white },
  // '50%': { color: '#ff8fc7'},
  '100%': { color: themeColors.hotpink }
})

export const classes = mergeStyleSets({
  navBar: {
    display: 'block',
    marginLeft: '0.5em',
    marginRight: '0.5em',
    textAlign: 'center',
    a: {
      position: 'relative',
      color: themeColors.white,
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontFamily: FontFamilies.secondary,
      fontWeight: 300,
      ':hover': {
        animation: colorChange,
        animationDuration: '0.5s',
        animationFillMode: 'both',
        animationDelay: 0
      },
      '.active': {
        color: themeColors.hotpink
      }
    }
  }
})

