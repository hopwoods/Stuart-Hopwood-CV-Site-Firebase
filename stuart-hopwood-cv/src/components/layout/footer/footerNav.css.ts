import { mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../Hooks'

const theme = useTheme()
export const classes = mergeStyleSets({
	nav: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 1',
		fontSize: '1.2em',

		'svg': {
			color: theme.brandDark,
			position: 'relative',
			top: '0.15em'
		}

	}
})