import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	skillsWithProgress: {
		gridColumn: '1 / span 1',
		justifySelf: 'stretch',
		padding: 0,
		margin: '0.3em 0'
	},
	progressCircle: {
		gridColumn: '3 / span 1',
		justifySelf: 'end',
		position: 'relative',
		top: '2px',

		'.MuiCircularProgress-colorPrimary': {
			color: theme.colors.brandAccentColor
		},
		'.MuiCircularProgress-circle': {
			strokeLinecap: 'round'
		},
		'.MuiTypography-colorTextSecondary': {
			color: theme.colors.text,
			fontWeight: 200
		},
		'.MuiTypography-root': {
			color: theme.colors.text,
			paddingTop: '2px',
			paddingLeft: '2px',
			fontSize: '0.7em'
		}
	},
	progressBar: {
		gridColumn: '2 / span 1',
		justifySelf: 'start',
		paddingRight: '0',
		width: '100%',
		'.MuiLinearProgress-root': {
			height: '9px',
			borderRadius: '5px',
			marginRight: '0.5em',
			'@media(max-width: 768px)': {
				marginRight: '0.7em'
			},
			'@media(max-width: 480px)': {
				marginRight: '0.7em'
			},
			'@media(max-width: 425px)': {
				marginRight: '1.25em'
			},
		},
		'.MuiLinearProgress-colorPrimary': {
			backgroundColor: theme.colors.brandDark
		},
		'.MuiLinearProgress-bar': {
			borderRadius: 5,
			backgroundColor: theme.colors.brandAccentColor,
		}
	},
	nameStyle: {
		gridColumn: '1 / span 1',
		justifySelf: 'start'
	},
	progressBarWrapper: {
		display: 'grid',
		gridTemplateColumns: '8em auto 3em',
		gridTemplateRows: 'auto',
		gridGap: '0em',
		height: 'fit-content',
		alignItems: 'center',
		padding: 0
	}
})