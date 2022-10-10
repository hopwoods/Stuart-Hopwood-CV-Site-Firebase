import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../style/themeProvider'
export const gridClasses = mergeStyleSets({
	grid: {
		gridColumn: '1 / span 1',
		padding: 0,
		display: 'grid',
		gridTemplateColumns: '0.1fr 1fr',
		gridTemplateRows: 'auto',
		gridGap: '5rem',
		justifySelf: 'stretch',
		justifyItems: 'start',
		alignSelf: 'stretch',
		alignItems: 'start',

		a: {
			color: theme.colors.linkColor,
			textDecoration: 'none',

			':hover': {
				color: theme.colors.linkHoverColor
			}
		}
	}
})