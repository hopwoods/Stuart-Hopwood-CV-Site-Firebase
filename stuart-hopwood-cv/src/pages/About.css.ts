import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../style/themeProvider'

export const classes = mergeStyleSets({
	about: {
		gridColumn: '1 / span 2',
		margin: 0,
		paddingTop: '7em',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: 'auto',
		minHeight: '100vh',
		height: 'fit-content',
		justifySelf: 'stretch',
		placeSelf: 'start center',
		justifyItems: 'center',
		backgroundColor: theme.colors.bodyBackground,
		gridGap: '3rem',

		'.header': {
			gridColumn: '1 / span 2',
			alignSelf: 'start',
			justifySelf: 'center',
		},

		'#badges': {
			gridColumn: ' 1 / span 2',
			gridRow: '2 / span 1'
		},
	}
})