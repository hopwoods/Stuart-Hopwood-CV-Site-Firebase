import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	nav: {
		gridColumn: '1 / span 1',
		gridRow: '3 / span 1',
		display: 'grid',
		gridTemplateRows: 'auto',
		gridTemplateColumns: '0.33fr 0.33fr',
		gridAutoFlow: 'column',
		fontSize: '1.1em',
		placeItems: 'center',
		gridGap: '0.75em',

		'a': {
			display: 'block',
			marginBotton: '1em',
			color: theme.colors.linkColor,
			textDecoration: 'none',

			':hover': {
				color: theme.colors.linkHoverColor
			}
		},

		'svg': {
			color: theme.colors.brandDark,
			position: 'relative',
			top: '0.15em'
		}
	},
})