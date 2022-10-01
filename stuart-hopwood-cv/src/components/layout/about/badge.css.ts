import { mergeStyleSets } from '@fluentui/merge-styles'
import { theme } from '../../../style/themeProvider'

export const classes = mergeStyleSets({
	badge: {
		//background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
		backgroundColor: theme.colors.bodyBackground,
		placeSelf: 'stretch stretch',
		display: 'flex',
		placeItems: 'center',
		placeContent: 'center',
		textAlign: 'center',
		borderRadius: '10px',
		borderWidth: '1px',
		borderColor: theme.colors.Grey5,
		borderStyle: 'solid',
		color: theme.colors.text

	}
})