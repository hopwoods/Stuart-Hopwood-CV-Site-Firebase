import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	content: {
		gridArea: 'content',
		display: 'grid',
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'auto',
		gridGap: '0em',
		minHeight: '64.6vh',
		justifySelf: 'stretch',
		backgroundColor: theme.colors.bodyBackground,
		fontSize: '1rem',
		color: theme.colors.text,
		overflow: 'hidden',
		paddingBottom: '3rem',

		a: {
			color: theme.colors.linkColor,
			':hover': {
				color: theme.colors.linkHoverColor
			}
		},

		p: {
			lineHeight: '1.5em'
		},

		'h1,h2, h3,h4,h5,h6': {
			color: theme.colors.brandAccentColor

		},
		'h2': {
			color: theme.colors.Grey12
		}
	}
})
