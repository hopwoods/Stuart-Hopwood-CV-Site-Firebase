import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	logoutLink: {
		textDecoration: 'none',
		cursor: 'pointer',
		color: theme.colors.linkColor,
		':hover': {
			color: theme.colors.linkHoverColor
		}
	}
})