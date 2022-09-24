import { mergeStyleSets } from '@fluentui/merge-styles'
import { FontFamilies } from '../../typeography/font-families'
export const classes = mergeStyleSets({
	profile: {
		fontFamily: FontFamilies.primary,
		padding: '1em',
		display: 'grid',
		gridTemplateColumns: '30vw',
		gridTemplateRows: 'auto',
		gridGap: '0.4em',
		height: 'fit-content',
		width: 'fit-content',
		justifySelf: 'center',
		placeItems: 'center',

		'@media(max-width: 2560px)': {
			gridTemplateColumns: '30vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 1',
			gridRow: '3 / span 1',
		},
		'@media(max-width: 1920px)': {
			gridTemplateColumns: '30vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 1',
			gridRow: '3 / span 1',
		},
		'@media(max-width: 1366px)': {
			gridTemplateColumns: '30vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 1',
			gridRow: '3 / span 1',
		},
		'@media(max-width: 1024px)': {
			gridTemplateColumns: '40vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 1',
			gridRow: '3 / span 1',
			fontSize: '0.9em',
		},
		'@media(max-width: 768px)': {
			gridTemplateColumns: '75vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 2',
			gridRow: '3 / span 1',
			fontSize: '0.8em',
		},
		'@media(max-width: 480px)': {
			gridTemplateColumns: '90vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 2',
			gridRow: '3 / span 1',
			fontSize: '0.8em',
		},
		'@media(max-width: 425px)': {
			gridTemplateColumns: '90vw',
			gridTemplateRows: 'auto',
			gridColumn: '1 / span 2',
			gridRow: '3 / span 1',
			fontSize: '0.7em',
		},
	}
})