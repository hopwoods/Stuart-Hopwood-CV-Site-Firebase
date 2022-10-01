import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	nav: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 1',
		fontSize: '1.1em',

		'a': {
			display: 'block',
			marginBotton: '1em'
		},

		'svg': {
			color: theme.colors.brandDark,
			position: 'relative',
			top: '0.15em'
		}

	}
})