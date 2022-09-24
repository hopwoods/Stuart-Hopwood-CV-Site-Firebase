import { mergeStyleSets } from '@fluentui/merge-styles'

export const classes = mergeStyleSets({
	aboutText: {
		gridColumn: '1 / span 1',
		minHeight: 'fit-content',
		justifySself: 'center',
		textAlign: 'justify',
		marginBottom: '2rem',
	}
})