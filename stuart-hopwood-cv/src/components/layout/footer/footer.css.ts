import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	navHeader: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 1',
	},
	navLinks: {
		gridColumn: '1 / span 1',
		gridRow: '3 / span 1',
	},
	footer: {
		gridArea: 'footer',
		justifySelf: 'stretch',
		backgroundColor: theme.colors.bodyBackgroundDark,
		color: theme.colors.footerText,
		padding: '0.4em',
		fontSize: '0.9em',
		fontWeight: 400,
		minHeight: '5rem',
		textAlign: 'center',
		alignItems: 'center',
		display: 'grid',
		gridTemplateRows: '10rem 10rem 10rem auto',
		gridTemplateColumns: '19em',
		gridGap: '1rem',
		placeContent: 'center',

		'section': {
			justifySelf: 'center'
		},

		'a': {
			color: theme.colors.linkColor,
			textDecoration: 'none',

			':hover': {
				color: theme.colors.linkHoverColor
			}
		},

		'@media(min-width: 2560px)': {
			gridTemplateRows: '15rem auto',
			gridTemplateColumns: 'repeat(3, 20em)',
		},
		'@media(min-width: 1920px)': {
			gridTemplateRows: '15rem auto',
			gridTemplateColumns: 'repeat(3, 20em)',
		},
		'@media(min-width: 1366px)': {
			gridTemplateRows: '15rem auto',
			gridTemplateColumns: 'repeat(3, 20em)',
		},
		'@media(min-width: 1024px)': {
			gridTemplateRows: '15rem auto',
			gridTemplateColumns: 'repeat(3, 20em)',
		},
		'@media(min-width: 768px)': {
			gridTemplateRows: '15rem auto',
			gridTemplateColumns: 'repeat(3, 15em)',
		}
	},
	copyright: {
		gridColumn: '1 / span 1',
		gridRow: '4 / span 1',

		'@media(min-width: 2560px)': {
			gridColumn: '1 / span 3',
			gridRow: '2 / span 1',
		},
		'@media(min-width: 1920px)': {
			gridColumn: '1 / span 3',
			gridRow: '2 / span 1',
		},
		'@media(min-width: 1366px)': {
			gridColumn: '1 / span 3',
			gridRow: '2 / span 1',
		},
		'@media(min-width: 1024px)': {
			gridColumn: '1 / span 3',
			gridRow: '2 / span 1',
		},
		'@media(min-width: 768px)': {
			gridColumn: '1 / span 3',
			gridRow: '2 / span 1',
		}
	},
	menu: {
		gridColumn: '1 / span 1',
		gridRow: '1 / span 1',
		justifySelf: 'center',
		alignSelf: 'start',
		display: 'grid',
		gridTemplateRows: 'auto',
		gridTemplateColumns: 'auto',
		placeContent: 'center',

		'@media(min-width: 2560px)': {
			gridColumn: '1 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1920px)': {
			gridColumn: '1 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1366px)': {
			gridColumn: '1 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1024px)': {
			gridColumn: '1 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 768px)': {
			gridColumn: '1 / span 1',
			gridRow: '1 / span 1',
		}
	},
	contact: {
		gridColumn: '1 / span 1',
		gridRow: '2 / span 1',
		justifySelf: 'center',
		alignSelf: 'start',

		'@media(min-width: 2560px)': {
			gridColumn: '2 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1920px)': {
			gridColumn: '2 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1366px)': {
			gridColumn: '2 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1024px)': {
			gridColumn: '2 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 768px)': {
			gridColumn: '2 / span 1',
			gridRow: '1 / span 1',
		}
	},
	follow: {
		gridColumn: '1 / span 1',
		gridRow: '3 / span 1',
		justifySelf: 'center',
		alignSelf: 'start',

		'a': {
			display: 'inline-block'
		},

		'@media(min-width: 2560px)': {
			gridColumn: '3 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1920px)': {
			gridColumn: '3 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1366px)': {
			gridColumn: '3 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 1024px)': {
			gridColumn: '3 / span 1',
			gridRow: '1 / span 1',
		},
		'@media(min-width: 768px)': {
			gridColumn: '3 / span 1',
			gridRow: '1 / span 1',
		}
	},
	socialLinks: {
		display: 'grid',
		gridTemplateRows: 'auto',
		gridTemplateColumns: 'repeat(4,auto)',
		fontSize: '0.6em'
	}
})


