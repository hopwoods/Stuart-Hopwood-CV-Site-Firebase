import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../../style/themeProvider'

export const classes = mergeStyleSets({
	socialLink: {
		color: theme.colors.brandAccentColor,
	}
})