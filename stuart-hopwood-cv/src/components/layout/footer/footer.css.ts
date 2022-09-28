import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../Hooks/useTheme'

export const classes = mergeStyleSets({
	footer: {
		gridArea: 'footer',
		justifySelf: 'stretch',
		backgroundColor: theme.bodyBackgroundDark,
		color: theme.Grey8,
		padding: '0.4em',
		fontSize: '0.9em',
		fontWeight: 200,
		minHeight: '5rem',
		textAlign: 'center',
		alignItems: 'center',
		display: 'grid',
		gridTemplateRows: '15rem auto',
		gridTemplateColumns: 'auto auto auto',
		gridGap: '1rem',

		'a': {
			color: theme.linkColor,
			textDecoration: 'none',

			':hover': {
				color: theme.linkHoverColor
			}
		}
	},
	copyright: {
		gridColumn: '1 / span 3',
		gridRow: '2 / span 1'
	},
	menu: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 1',
		placeSelf: 'stretch'
	},
	contact: {
		gridColumn: '2 / span 1',
		gridRow: '1 / span 1',
		placeSelf: 'stretch'
	},
	follow: {
		gridColumn: '3 / span 1',
		gridRow: '1 / span 1',
		placeSelf: 'stretch'
	},
})


