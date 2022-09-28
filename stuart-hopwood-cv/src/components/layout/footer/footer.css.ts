import { mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../Hooks'

const theme = useTheme()
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
		justifyContent: 'center',
		alignItems: 'center',
		display: 'grid',
		gridTemplateRows: 'auto auto',
		gridTemplateColumns: 'auto',
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
		gridColumn: '1 / span 1',
		gridRow: '2 / span 1'
	}
})


