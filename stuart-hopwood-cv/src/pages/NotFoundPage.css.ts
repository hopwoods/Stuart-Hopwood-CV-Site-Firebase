import { mergeStyleSets } from '@fluentui/merge-styles'
import { FontFamilies } from '../style'

export const classes = mergeStyleSets({
	grid: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 2',
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 0.75fr)',
		gridTemplateRows: '0.3fr 0.3fr auto',
		gridGap: '1em'
	},
	darth: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 3',
		justifySelf: 'center',
		alignSelf: 'center',

		'@media(max-width: 2560px)': {
			gridColumn: '1 / span 1'
		},
		'@media(max-width: 1920px)': {
			gridColumn: '1 / span 1'

		},
		'@media(max-width: 1366px)': {
			gridColumn: '1 / span 1'

		},
		'@media(max-width: 1024px)': {
			gridColumn: '1 / span 1'

		},
		'@media(max-width: 768px)': {
			gridColumn: '1 / span 2'
		}
	},
	text: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 1',
		justifySelf: 'center',
		alignSelf: 'start',
		textAlign: 'center',

		'@media(max-width: 2560px)': {
			gridColumn: '1 / span 1'
		},
		'@media(max-width: 1920px)': {
			gridColumn: '1 / span 1'

		},
		'@media(max-width: 1366px)': {
			gridColumn: '1 / span 1'

		},
		'@media(max-width: 1024px)': {
			gridColumn: '1 / span 1'

		},
		'@media(max-width: 768px)': {
			gridColumn: '1 / span 2'
		}
	},
	subText: {

		gridColumn: '1 / span 2',
		gridRow: '2 / span 1',
		justifySelf: 'center',
		alignSelf: 'start',
		textAlign: 'center',
		fontSsize: ' 0.8em',

		fontFamily: FontFamilies.primary,
		'@media(max-width: 2560px)': {
			gridColumn: '2 / span 1'
		},
		'@media(max-width: 1920px)': {
			gridColumn: '2 / span 1'
		},
		'@media(max-width: 1366px)': {
			gridColumn: '2 / span 1'
		},
		'@media(max-width: 1024px)': {
			gridColumn: '2 / span 1'
		},
		'@media(max-width: 768px)': {
			gridColumn: '1 / span 2'
		}
	},
	mouseIcon: {
		gridColumn: '1 / span 2',
		gridRow: '3 / span 1',
		justifySelf: 'center',
		alignSelf: 'start',
		textAlign: 'center',
		fontSize: '0.8em',
		position: 'relative',

		'@media(max-width: 2560px)': {
			gridColumn: '2 / span 1',
			textAalign: 'justify'
		},
		'@media(max-width: 1920px)': {
			gridColumn: '2 / span 1',
			textAalign: 'justify'
		},
		'@media(max-width: 1366px)': {
			gridColumn: '2 / span 1',
			textAalign: 'justify'
		},
		'@media(max-width: 1024px)': {
			gridColumn: '2 / span 1'
		},
		'@media(max-width: 768px)': {
			gridColumn: '1 / span 2'
		}

	}
})