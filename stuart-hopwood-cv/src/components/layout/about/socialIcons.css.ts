import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	socialIcons: {
		gridColumn: '1 / span 1',
		justifySelf: 'stretch',
		padding: '1em',
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 5em)',
		gridTemplateRows: 'auto',
		gridGap: '1em',
		height: 'fit-content',
		margin: '2em 0',
		alignItems: 'center',
		justifyItems: 'center',
		gridAutoFlow: 'dense',
		placeSelf: 'center',

		'.MuiIconButton-root': {
			fontSize: '4em'
		},

		'.MuiIconButton-colorPrimary:hover': {
			backgroundColor: theme.colors.Grey2
		},
	}
})