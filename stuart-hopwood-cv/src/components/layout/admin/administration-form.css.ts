import { mergeStyleSets } from '@fluentui/merge-styles'
import { FontFamilies } from '../../typeography/font-families'

export const classes = mergeStyleSets({
	adminForm: {
		gridColumn: '1 / span 1',
		padding: 0,
		display: 'grid',
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'auto auto',
		gridGap: '0em',
		height: 'fit-content',
		justifySelf: 'stretch',
		justifyItems: 'start',
		alignItems: 'center',

		'.Toastify__toast': {
			fontFamily: FontFamilies.primary,
			fontSize: '1rem'
		}
	}
})
