import { mergeStyleSets } from '@fluentui/merge-styles'

export const classes = mergeStyleSets({
	button: {
		fontFamily: '"Source Sans Pro", sans-serif !important',
		fontWeight: '400 !important',
		fontSize: '0.7rem !important',
		borderWidth: '2px !important',

		'@media(max-width: 2560px)': {
			fontSize: '1.2rem !important'
		},
		'@media(max-width: 1920px)': {
			fontSize: '1.2rem !important'
		},
		'@media(max-width: 1366px)': {
			fontSize: '1.2rem !important'
		},
		'@media(max-width: 1024px)': {
			fontSize: '1.2rem !important'
		},
		'@media(max-width: 768px)': {
			fontSize: '0.8rem !important'
		},
		'@media(max-width: 480px)': {
			fontSize: '0.8rem !important'
		},
		'@media(max-width: 425px)': {
			fontSize: '0.7rem !important'
		},
	}
})