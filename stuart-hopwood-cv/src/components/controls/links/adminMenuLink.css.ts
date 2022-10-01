import { mergeStyleSets } from '@fluentui/merge-styles'
import { FontFamilies } from '../../../style'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	menuLink: {
		color: theme.colors.text,
		fontFamily: FontFamilies.primary,
		a: {
			position: 'relative',
			top: '-0.2rem',
			'.active': {
				color: theme.colors.brandAccentColor,
			},
			svg: {
				marginRight: '1rem'
			}
		}
	}
})