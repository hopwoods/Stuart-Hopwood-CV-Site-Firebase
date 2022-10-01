import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../style/themeProvider'

export const typography = mergeStyleSets({

	copy1: {
		lineHeight: '1.5',
		fontSize: '1.15em',
	},
	copy3: {
		lineHeight: '1.2',
		fontSize: '1em',
		color: theme.colors.subText
	},
	copy2: {
		lineHeight: '1.4',
		fontSize: '1em',
		color: theme.colors.subText
	},
})