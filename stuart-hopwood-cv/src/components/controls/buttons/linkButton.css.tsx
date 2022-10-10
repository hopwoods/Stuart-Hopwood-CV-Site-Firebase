import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	link: {
		fontWeight: '400 !important',
		fontSize: 'clamp(0.85rem, 0.5rem + 1.15vw, 1.2rem)',
		lineHeight: '1.5',
		cursor: 'pointer',
		padding: '0.25em 0.5em',
		border: `2px solid ${theme.colors.buttonColor}`,
		borderRadius: '0.25em',
		position: 'relative',
		isolation: 'isolate',
		display: 'inline-grid',
		placeContent: 'center',
		textDecoration: 'none',
		transition: 'color 250ms',
		color: theme.colors.buttonColor,
		transtion: 'color 500ms, border-color 750ms',

		':hover': {
			borderColor: theme.colors.buttonColorActive,
			color: theme.colors.buttonColorActive,
			transtion: 'color 500ms, border-color 500ms',
		},
	}
})