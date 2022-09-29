import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../../Hooks/useTheme'



export const classes = mergeStyleSets({
	githubRepoLink: {
		gridColum: '1 / span 1',
		justifySelf: 'stretch',
		display: 'grid',
		gridTemplateColumns: '2.2em auto',
		gridTemplateRows: 'auto',
		gridGap: '0em',
		height: 'fit-content',
		alignItems: 'center',
		padding: 0,
	},
	icon: {
		fontSize: '1.3rem',
		left: '0.1rem',
		position: 'relative',
	},
	link: {
		display: 'inline-block',
		marginLeft: '0.1em',
		fontSize: '1.1em',
		color: theme.brandAccentColor,
		textDecoration: 'none',
		paddingBottom: '5px',
		width: 'fit-content',
	}
})