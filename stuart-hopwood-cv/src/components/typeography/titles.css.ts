import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../Hooks/useTheme'

export const classes = mergeStyleSets({
	subTitle: {
		fontSize: '1.4rem',
		textAlign: 'left',
		display: 'block',

		'@media(max-width: 2560px)': {
			fontSize: '2.4rem'
		},
		'@media(max-width: 1920px)': {
			fontSize: '2.43rem'
		},
		'@media(max-width: 1366px)': {
			fontSize: '2.43rem'
		},
		'@media(max-width: 1024px)': {
			fontSize: '2.4rem'
		},
		'@media(max-width: 768px)': {
			fontSize: '1.4rem'
		},
		'@media(max-width: 480px)': {
			fontSize: '1.4rem'
		},
		'@media(max-width: 425px)': {
			fontSize: '1.3rem'
		},
	},
	titleText: {
		color: theme.brandAccentColor
	}
})