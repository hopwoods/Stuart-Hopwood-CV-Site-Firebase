import { ThemeColors } from '../types/ThemeColors'

export const theme: ThemeColors = {
	text: '#c7c7c7',
	subText: '#999999',
	textInverse: '#1e1e1e',

	brandLight: '#8ecae6',
	brandMedium: '#219ebc',
	brandDark: '#023047',
	brandAccentColor: '#fb8500',

	bodyBackground: 'rgba(0,16,32,1)',
	bodyBackgroundDark: '#000d1a',

	navbarBackground: '#023047',
	navbarBackgroundScrolled: '#023047',
	navbarBorder: '#fb8500',

	Grey1: '#222222',
	Grey2: '#303030',
	Grey3: '#404040',
	Grey4: '#505050',
	Grey5: '#606060',
	Grey6: '#707070',
	Grey7: '#808080',
	Grey8: '#909090',
	Grey9: '#a5a5a5',
	Grey10: '#bfbfbf',
	Grey11: '#c0c0c0',
	Grey12: '#d5d5d5',
	Grey13: '#efefef',
	Grey14: '#f0f0f0',

	white: '#ffffff',
	green: '#387D4D',
	red: '#D20008',
	black: '#000000',

	danger: '#9c0000',
	warning: '#f0a800',
	info: '#00acf0',

	disabledColour: '#dddddd',
}

export function useTheme(): ThemeColors {
	return theme
}
