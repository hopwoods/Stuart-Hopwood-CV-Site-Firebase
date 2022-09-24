import { mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../Hooks'

const theme = useTheme()

export const classes = mergeStyleSets({
	content: {
		gridArea: 'content',
		display: 'grid',
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'auto',
		gridGap: '0em',
		minHeight: '64.6vh',
		justifySelf: 'stretch',
		backgroundColor: theme.bodyBackgroundDark,
		fontSize: '1rem',
		color: theme.text,
		overflow: 'hidden',
		paddingBottom: '3rem',

		a: {
			color: theme.brandAccentColor,
			':hover': {
				color: theme.brandMedium
			}
		},

		p: {
			lineHeight: '1.5em'
		},

		'h1,h2, h3,h4,h5,h6': {
			color: theme.brandAccentColor

		},
		'h2': {
			color: theme.Grey12
		}
	}
})
