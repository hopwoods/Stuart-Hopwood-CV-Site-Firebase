import { mergeStyleSets } from '@fluentui/merge-styles'

export const classes = mergeStyleSets({
	title: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 1',
		width: '100%',
		justifySelf: 'start'
	},
	aboutTextField: {
		gridColumn: '1 / span 1',
		gridRow: '2 / span 1',
		width: '100%',
		height: 'fit-content',
		justifySelf: 'start',
		marginBottom: '1rem'
	},
	saveButton: {
		gridColumn: '1 / span 1',
		gridRow: '3 / span 1',
		width: 'fit-content',
		justifySelf: 'start',
		marginBottom: '1rem'
	}
})
