import { mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../Hooks'
import { FontFamilies } from '../../../style'

const themeColors = useTheme()

export const classes = mergeStyleSets({
	menuLink: {
		color: themeColors.text,
		fontFamily: FontFamilies.primary,
		a: {
			position: 'relative',
			top: '-0.2rem',
			'.active': {
				color: themeColors.brandAccentColor,
			},
			svg: {
				marginRight: '1rem'
			}
		}
	}
})