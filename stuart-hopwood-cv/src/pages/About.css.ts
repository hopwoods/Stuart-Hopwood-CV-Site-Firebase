import { mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../Hooks'

const theme = useTheme()

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
		backgroundColor: theme.bodyBackground,

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