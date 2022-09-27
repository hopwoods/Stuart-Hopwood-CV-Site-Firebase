import { mergeStyleSets } from '@fluentui/merge-styles'

export const classes = mergeStyleSets({
	skills: {
		padding: '1em',
		display: 'grid',
		gridTemplateColumns: '30vw',
		gridTemplateRows: 'auto',
		gridColumn: '2 / span 1',
		gridRow: '3 / span 1',
		gridGap: ' 0.4em',
		height: 'fit-content',
		width: 'fit-content',
		justifySelf: 'center',
		justifyItems: 'center',
		fontSize: '1em',

		'@media(max-width: 2560px)': {
			gridTemplateColumns: '30vw',
			gridTemplateRows: 'auto',
			gridColumn: '2 / span 1',
			gridRow: '3 / span 1',
			fontSize: '1em',
		},
		'@media(max-width: 1920px)': {
			gridTemplateColumns: '30vw',
			gridTemplateRows: 'auto',
			gridColumn: '2 / span 1',
			gridRow: '3 / span 1',
			fontSize: '1em',
		},
		'@media(max-width: 1366px)': {
			gridTemplateColumns: '30vw',
			gridTemplateRows: 'auto',
			gridColumn: '2 / span 1',
			gridRow: '3 / span 1',
			fontSize: '1em',
		},
		'@media(max-width: 1024px)': {
			gridTemplateColumns: '40vw',
			gridTemplateRows: 'auto',
			gridColumn: '2 / span 1',
			gridRow: '3 / span 1',
			fontSize: '1em',
		},
		'@media(max-width: 768px)': {
			gridTemplateColumns: '90vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 2',
			gridRow: '4 / span 1',
			fontSize: '0.9em',
			marginTop: '2em'
		},
		'@media(max-width: 480px)': {
			gridTemplateColumns: '90vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 2',
			gridRow: '4 / span 1',
			fontSize: '0.9em',
			marginTop: '2em'
		},
		'@media(max-width: 425px)': {
			gridTemplateColumns: '90vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 2',
			gridRow: '4 / span 1',
			fontSize: '0.8em',
			marginTop: '2em'
		},
	}
})

