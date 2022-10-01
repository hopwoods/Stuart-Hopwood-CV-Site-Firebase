import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'


export const classes = mergeStyleSets({
	skillExample: {
		paddingLeft: '0.6rem',
		borderLeft: `3px solid ${theme.colors.brandMedium}`,
	}
})