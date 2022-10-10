import { keyframes, mergeStyleSets } from '@fluentui/merge-styles'
import { FontFamilies } from '../../../style'
import { theme } from '../../../style/themeProvider'

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
		height: '100vh !important',
		gridRowGap: '3em',
	},
	banner: {
		gridArea: 'banner',
		padding: 0,
		color: theme.colors.white,
		fontSize: '1rem',
		lineHeight: 1.3,
		justifySelf: 'stretch',
		alignSelf: 'stretch',
		height: 'fit-content',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '0.25fr 0.5fr',
		gridRowGap: '1em',
		justifyItems: 'center',
		alignItems: 'start',
		textAlign: 'center',
		fontFamily: FontFamilies.secondary,
		fontWeight: 300,
		backgroundSize: '150% 150%',
		p: {
			alignSelf: 'center',
			lineHeight: '1.3'
		},
		'button.about': {
			alignSelf: 'start',
			display: 'block',
			margin: '1em',
			fontSize: '1.5em !important'
		},
		'@media(max-width: 2560px)': {
			fontSize: '3em'
		},
		'@media(max-width: 1920px)': {
			fontSize: '3em'
		},
		'@media(max-width: 1366px)': {
			fontSize: '3em'
		},
		'@media(max-width: 1024px)': {
			fontSize: '3em'
		},
		'@media(max-width: 768px)': {
			fontSize: '2em',
			backgroundSize: '200% 200%',
		},
		'@media(max-width: 480)': {
			fontSize: '1.9em',
			backgroundSize: '200% 200%',
		},
		'@media(max-width: 425px)': {
			fontSize: '1.75em',
			backgroundSize: '200% 200%',
		},
		'@media(max-width: 320px)': {
			fontSize: '1.5em',
			backgroundSize: '200% 200%',
		}
	},
	themeToggle: {
		gridColumm: '1/span 1',
		gridRow: '1/span 1',
		justifySelf: 'end',
		fontSize: '0.4em'
	}
})
