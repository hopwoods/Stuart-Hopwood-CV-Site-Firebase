import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	adminMenu: {
		gridColumn: '1 / span 1',
		padding: '1em',
		display: 'grid',
		griTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(5, auto)',
		gridGap: '0em',
		height: 'fit-content',
		justifyItems: 'start',
		justifySelf: 'end',
		alignItems: 'center',
		a: {
			color: theme.colors.linkColor,
			textDecoration: 'none',
			':hover': {
				color: theme.colors.linkHoverColor
			}
		}
	},
	drawerStyle: {
		gridColumn: '1 / span 1',
		height: 'fit-content',
		width: '100%',
		justifySelf: 'center'
	}
})