import { mergeStyleSets } from '@fluentui/merge-styles'

export const classes = mergeStyleSets({
	loading: {
		gridArea: 'content',
		display: 'grid',
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'auto',
		gridGap: '0em',
		//minHeight: '45.5vh',
		placeContent: 'center',
		justifySelf: 'center',
		fontSise: '3rem',

		// '@media(max-width: 2560px)': {
		// 	minHeight: '70vw'
		// },
		// '@media(max-width: 1920px)': {
		// 	minHeight: '70vw'
		// },
		// '@media(max-width: 1366px)': {
		// 	minHeight: '60vw'
		// },
		// '@media(max-width: 1024px)': {
		// 	minHeight: '97vw'
		// },
		// '@media(max-width: 768px)': {
		// 	minHeight: '97vw'
		// },
		// '@media(max-width: 480px)': {
		// 	minHeight: '97vw'
		// },
		// '@media(max-width: 425px)': {
		// 	minHeight: '97vw'
		// }
	},
	loadingText: {
		display: 'block',
		height: 'fit-content',
		width: 'fit-content',
		textAlign: 'center'
	}
})