import { keyframes, mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../../Hooks/useTheme'


const themeColors = useTheme()

const colorChange = keyframes({
	'0%': { color: themeColors.white },
	'100%': { color: themeColors.brandAccentColor }
})

export const classes = mergeStyleSets({
	navBarLink: {
		display: 'block',
		marginLeft: '0.5em',
		marginRight: '0.5em',
		textAlign: 'center',
		a: {
			position: 'relative',
			color: themeColors.white,
			textDecoration: 'none',
			textTransform: 'uppercase',
			':hover': {
				animation: colorChange,
				animationDuration: '500ms',
				animationFillMode: 'both',
				animationDelay: 0
			},
			'.active': {
				color: themeColors.brandAccentColor
			}
		}
	}
})

