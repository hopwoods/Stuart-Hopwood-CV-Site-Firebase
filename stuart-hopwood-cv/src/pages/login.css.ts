import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../style/themeProvider'


export const classes = mergeStyleSets({
	login: {
		gridColumn: '1 / span 1',
		padding: '1em',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'auto',
		gridGap: '0em',
		alignSelf: 'stretch',
		justifySelf: 'stretch',
		justifyItems: 'center',
		alignItems: 'start',

		a: {
			color: theme.colors.linkColor,
			textDecoration: 'none',

			':hover': {
				color: theme.colors.linkHoverColor
			}
		}
	},
	heading: {
		marginTop: '3rem'
	}
})
