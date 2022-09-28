import { mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../Hooks/useTheme'

const themeColors = useTheme()

export const classes = mergeStyleSets({
	logoutLink: {
		textDecoration: 'none',
		color: themeColors.linkColor,
		':hover': {
			color: themeColors.linkHoverColor
		}
	}
})