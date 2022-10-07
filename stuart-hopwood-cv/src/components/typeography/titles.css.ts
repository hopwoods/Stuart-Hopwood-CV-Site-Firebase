import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../style/themeProvider'

export const classes = mergeStyleSets({
	subTitle: {
		fontSize: '1.4rem',
		textAlign: 'left',
		display: 'block',
		marginInlineStart: '0.6em',
		'@media(max-width: 2560px)': {
			fontSize: '2.4rem',
			marginInlineStart: '0'
		},
		'@media(max-width: 1920px)': {
			fontSize: '2.43rem',
			marginInlineStart: '0'
		},
		'@media(max-width: 1366px)': {
			fontSize: '2.43rem',
			marginInlineStart: '0'
		},
		'@media(max-width: 1024px)': {
			fontSize: '2.4rem',
			marginInlineStart: '0'
		},
		'@media(max-width: 768px)': {
			fontSize: '1.4rem',
			marginInlineStart: '0'
		},
		'@media(max-width: 480px)': {
			fontSize: '1.4rem',
			marginInlineStart: '0'
		},
		'@media(max-width: 425px)': {
			fontSize: '1.3rem',
			marginInlineStart: '0'
		},
		'@media(max-width: 375px)': {
			fontSize: '1.3rem',
			marginInlineStart: '0.6em'
		},
		'@media(max-width: 320px)': {
			fontSize: '1.3rem',
			marginInlineStart: '0.6em'
		},
	},
	titleText: {
		color: theme.colors.brandAccentColor
	}
})