import { keyframes, mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"
import { FontFamilies } from "../../../style"

const themeColors = useTheme()

export const colorChange = keyframes({
  '0%': { color: '#ff0034' },
  '10%': { color: '#3e0010' },
  '20%': { color: '#000000' },
  '30%': { color: '#3e0010' },
  '40%': { color: '#b90030' },
  '50%': { color: '#ff0034' },
  '60%': { color: '#b90030' },
  '70%': { color: '#3e0010' },
  '80%': { color: ' #000000' },
  '90%': { color: '#3e0010' },
  '100%': { color: '#ff0034' }
})

export const gradient = keyframes({
  '0%': { backgroundPosition: '0% 25%' },
  '25%': { backgroundPosition: '50% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '75%': { backgroundPosition: '50% 50%' },
  '100%': { backgroundPosition: '0% 50%' }
})

export const wobble = keyframes({
  '33%': { transform: 'translateX(-50px)' },
  '66%': { transform: 'translateX(50px)' }
})

export const up = keyframes({
  '0%': { opacity: 0 },
  '10%, 90%': { opacity: 1 },
  '100%': {
    opacity: 0,
    transform: 'translateY(-1024px)'
  }
})

export const classes = mergeStyleSets({
  fullscreen: {
    height: '100vh !important'
  },
  banner: {
    gridArea: 'banner',
    padding: '1em',
    color: themeColors.white,
    fontSize: '3rem',
    lineHeight: 1.3,
    justifySelf: 'stretch',
    alignSelf: 'stretch',
    height: 'fit-content',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '0.5fr',
    gridRowGap: '3em',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: FontFamilies.secondary,
    fontWeight: 100,
    background: `linear-gradient(
      45deg, 
      rgba(37,41,52,1) 0%, 
      rgba(92,17,73,1) 15%, 
      rgba(182,5,66,1) 30%, 
      rgba(221,0,63,1) 50%, 
      rgba(187,5,66,1) 70%, 
      rgba(92,17,73,1) 85%, 
      rgba(37,41,52,1) 100%
    )`,
    backgroundSize: '400% 400%',
    animationName: gradient,
    animationDuration: '15s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-out',

    p: {
      alignSelf: 'end',
      lineHeight: '1.3'
    },

    'span.name': {
      animationName: colorChange,
      animationDuration: '15s',
      animationIterationCount: 'infinite',
      fontWeight: 400,
      textShadow: '0px 0px 5px rgba(0, 0, 0, 0.75)'
    },

    'button.about': {
      alignSelf: 'start',
      display: 'block',
      margin: '1em'
    },

    '.bubbles-container': {
      position: 'absolute',
      top: 0,
      right: '50%',
      width: '100%',
      maxWidth: '15rem',
      transform: 'translateX(-50%)',
      opacity: 0.75,
      overflow: 'visible'
    },
    '.bubbles': {
      width: '100%',
      height: 'auto'
    },
    '.bubbles circle': {
      stroke: 'white',
      fill: 'rgba(255, 255, 255, 0.25)'
    },
    '.bubbles > g > g:nth-of-type(3n) circle': {
      stroke: '#ff0034'
    },
    '.bubbles > g > g:nth-of-type(4n) circle': {
      stroke: '#ff0034'
    },
    '.bubbles-large': {
      overflow: 'visible'
    },
    '.bubbles-large > g': {
      transform: 'translateY(2048px)',
      opacity: 0,
      willChange: 'transform, opacity'
    },
    '.bubbles-large g:nth-of-type(1)': {
      animation: `${up} 6.5s infinite`
    },
    '.bubbles-large g:nth-of-type(1) g': {
      transform: 'translateX(350px)'
    },
    '.bubbles-large g:nth-of-type(1) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-large g:nth-of-type(2)': {
      animationName: up,
      animationDuration: '5.25s',
      animationDelay: '250ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-large g:nth-of-type(2) g': {
      transform: 'translateX(450px)'
    },
    '.bubbles-large g:nth-of-type(2) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-large g:nth-of-type(3)': {
      animationName: up,
      animationDuration: '6s',
      animationDelay: '750ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-large g:nth-of-type(3) g': {
      transform: 'translateX(700px)'
    },
    '.bubbles-large g:nth-of-type(3) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-large g:nth-of-type(4)': {
      animationName: up,
      animationDuration: '5.5s',
      animationDelay: '1.5s',
      animationIterationCount: 'infinite',
    },
    '.bubbles-large g:nth-of-type(4) g': {
      transform: 'translateX(500px)'
    },
    '.bubbles-large g:nth-of-type(4) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '1.5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-large g:nth-of-type(5)': {
      animationName: up,
      animationDuration: '6.5s',
      animationDelay: '4s',
      animationIterationCount: 'infinite',
    },
    '.bubbles-large g:nth-of-type(5) g': {
      transform: 'translateX(675px)'
    },
    '.bubbles-large g:nth-of-type(5) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small': {
      overflow: 'visible'
    },
    '.bubbles-small > g': {
      transform: 'translateY(2048px)',
      opacity: 0,
      willChange: 'transform, opacity'
    },
    '.bubbles-small g circle': {
      transform: 'scale(0)'
    },
    '.bubbles-small g:nth-of-type(1)': {
      animationName: up,
      animationDuration: '5.25s',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(1) g': {
      transform: 'translateX(350px)'
    },
    '.bubbles-small g:nth-of-type(1) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(2)': {
      animationName: up,
      animationDuration: '5.75s',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(2) g': {
      transform: 'translateX(750px)'
    },
    '.bubbles-small g:nth-of-type(2) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(3)': {
      animation: `${up} 5.25s 250ms infinite`,
      animationName: up,
      animationDuration: '5.25s',
      animationDelay: '250ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(3) g': {
      transform: 'translateX(350px)'
    },
    '.bubbles-small g:nth-of-type(3) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '250s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(4)': {
      animationName: up,
      animationDuration: '5.75s',
      animationDelay: '325ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(4) g': {
      transform: 'translateX(180px)'
    },
    '.bubbles-small g:nth-of-type(4) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '325ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(5)': {
      animationName: up,
      animationDuration: '6s',
      animationDelay: '125ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(5) g': {
      transform: 'translateX(350px)'
    },
    '.bubbles-small g:nth-of-type(5) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '250ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(6)': {
      animationName: up,
      animationDuration: '5.13s',
      animationDelay: '250ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(6) g': {
      transform: 'translateX(650px)'
    },
    '.bubbles-small g:nth-of-type(6) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '125ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(7)': {
      animationName: up,
      animationDuration: '6.25s',
      animationDelay: '350ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(7) g': {
      transform: 'translateX(480px)'
    },
    '.bubbles-small g:nth-of-type(7) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '325ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(8)': {
      animationName: up,
      animationDuration: '7s',
      animationDelay: '200ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(8) g': {
      transform: 'translateX(330px)'
    },
    '.bubbles-small g:nth-of-type(8) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '325ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(9)': {
      animationName: up,
      animationDuration: '6.25s',
      animationDelay: '233ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(9) g': {
      transform: 'translateX(230px)'
    },
    '.bubbles-small g:nth-of-type(9) circle': {
      animationName: wobble,
      animationDuration: '3s',
      animationDelay: '275ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    '.bubbles-small g:nth-of-type(10)': {
      animationName: up,
      animationDuration: '6s',
      animationDelay: '900ms',
      animationIterationCount: 'infinite',
    },
    '.bubbles-small g:nth-of-type(10) g': {
      transform: 'translateX(730px)'
    },
    '.bubbles-small g:nth-of-type(10) circle': {
      animationName: wobble,
      animationDuration: '2s',
      animationDelay: '905ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    }
  }
})
