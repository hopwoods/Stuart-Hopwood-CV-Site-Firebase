import { mergeStyleSets } from '@fluentui/merge-styles'
export const classes = mergeStyleSets({
	main: {
		gridColumn: '1 / span 2',
	},
	bannerText: {
		alignSelf: 'start',
		textAlign: 'start',
	},
	'span.name': {
		fontWeight: 400,
		textShadow: '0px 0px 5px rgba(0, 0, 0, 0.75)',
	}
})