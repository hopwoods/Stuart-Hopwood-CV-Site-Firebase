import { mergeStyleSets } from '@fluentui/merge-styles'
import { useTheme } from '../../../Hooks'
import { FontFamilies } from '../../../style'

const themeColors = useTheme()

export const classes = mergeStyleSets({
	badges: {
		marginTop: '5rem',
		marginBottom: '10rem',
		padding: '1em',
		color: themeColors.text,
		fontSize: '2rem',
		height: 'fit-content',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 0.25fr)',
		gridTemplateRows: '10rem',
		gridGap: '6em',
		justifyItems: 'center',
		alignItems: 'center',
		fontFamily: FontFamilies.secondary,
		fontWeight: 100,


		'@media(max-width: 2560px)': {
			gridTemplateColumns: 'repeat(4, 0.25fr)',
			gridTemplateRows: '10rem',
		},
		'@media(max-width: 1920px)': {
			gridTemplateColumns: 'repeat(4, 0.25fr)',
			gridTemplateRows: '10rem',
		},

		'@media(max-width: 1366px)': {
			gridTemplateColumns: 'repeat(4, 0.25fr)',
			gridTemplateRows: '10rem',
		},
		'@media(max-width: 1024px)': {
			gridTemplateColumns: 'repeat(4, 0.25fr)',
			gridTemplateRows: 'repeat(2, auto)',
			gridGap: '2em',
		},
		'@media(max-width: 768px)': {
			gridTemplateColumns: '0.5fr 0.5fr',
			gridTemplateRows: 'repeat(2, auto)',
			gridGap: '2em',
		},
		'@media(max-width: 480)': {
			gridTemplateColumns: '0.5fr 0.5fr',
			gridTemplateRows: 'repeat(2, auto)',
			gridGap: '2em',
		},
		'@media(max-width: 425)': {
			gridTemplateColumns: '0.5fr 0.5fr',
			gridTemplateRows: 'repeat(2, auto)',
			gridGap: '1em',
		},
	}
})
