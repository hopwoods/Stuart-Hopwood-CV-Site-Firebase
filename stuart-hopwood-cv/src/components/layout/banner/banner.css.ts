import { keyframes, mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../Hooks'
import { FontFamilies } from '../../../style'

const themeColors = useTheme()

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
		padding: 0,
		paddingTop: '1rem',
		color: themeColors.white,
		fontSize: '1rem',
		lineHeight: 1.3,
		justifySelf: 'stretch',
		alignSelf: 'stretch',
		height: 'fit-content',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '0.5fr',
		gridRowGap: '3em',
		justifyItems: 'center',
		alignItems: 'start',
		textAlign: 'center',
		fontFamily: FontFamilies.secondary,
		fontWeight: 300,
		backgroundSize: '150% 150%',
		p: {
			alignSelf: 'end',
			lineHeight: '1.3'
		},
		'span': {
			alignSelf: 'start',
			textAlign: 'start',
		},
		'span.name': {
			fontWeight: 400,
			textShadow: '0px 0px 5px rgba(0, 0, 0, 0.75)'
		},
		'button.about': {
			alignSelf: 'start',
			display: 'block',
			margin: '1em',
			fontSize: '1.5rem !important'
		},
		'@media(max-width: 2560px)': {
			fontSize: '3rem'
		},
		'@media(max-width: 1920px)': {
			fontSize: '3rem'
		},
		'@media(max-width: 1366px)': {
			fontSize: '3rem'
		},
		'@media(max-width: 1024px)': {
			fontSize: '3rem'
		},
		'@media(max-width: 768px)': {
			fontSize: '2rem',
			backgroundSize: '200% 200%',
		},
		'@media(max-width: 480)': {
			fontSize: '1.9rem',
			backgroundSize: '200% 200%',
		},
		'@media(max-width: 425px)': {
			fontSize: '1.75rem',
			backgroundSize: '200% 200%',
		}
	}
})
