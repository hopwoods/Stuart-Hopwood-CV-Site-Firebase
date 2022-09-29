import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../../Hooks/useTheme'

export const classes = mergeStyleSets({
	icon: {
		userSelect: 'none',
		gridColum: '1 / span 1',
		justifySelf: 'stretch',
		display: 'grid',
		gridTemplateColumns: '1.75em auto',
		gridTemplateRows: 'auto',
		gridGap: '0rem',
		height: 'fit-content',
		alignItems: 'center',
		justifyItems: 'start',
		padding: 0,
		marginBottom: '0.25rem',
		textAlign: 'left',
		color: theme.Grey12,
		span: {
			fontSize: '1.1em',
			display: 'inline-block',
			marginLeft: '0.6rem',
			a: {
				color: theme.linkColor,
				textDecoration: 'none',
				':hover': {
					color: theme.linkHoverColor
				}
			}
		}
	}
})