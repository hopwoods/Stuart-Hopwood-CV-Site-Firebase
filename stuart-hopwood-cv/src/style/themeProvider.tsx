import { mergeStyles } from '@fluentui/merge-styles'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { ThemeColors } from '../types/ThemeColors'

export type ThemeValues = {
	colors: ThemeColors
}

type ThemeProviderProps = {
	children: ReactNode

	/** A theme object which will provide the theme values*/
	theme: ThemeValues

	/** A theme object which will be used if the user perfers a dark theme over a light theme  */
	darkTheme?: ThemeValues
}

export function ThemeProvider({ children, theme, darkTheme }: ThemeProviderProps) {
	const [prefersDark, setPrefersDarkTheme] = useState<boolean>(false)
	const preferredTheme = useMemo(() => {
		return prefersDark ? darkTheme ? darkTheme : theme : theme
	}, [darkTheme, prefersDark, theme])

	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			const themePreference = event.matches ? 'dark' : 'light'
			setPrefersDarkTheme(themePreference === 'dark')
		},)

	}, [children, darkTheme, preferredTheme, prefersDark, setPrefersDarkTheme, theme])

	const themeCss = mergeStyles({
		':global(:root)': {
			'--theme-color-text': preferredTheme.colors?.text,
			'--theme-color-sub-text': preferredTheme.colors?.subText,
			'--theme-color-text-inverse': preferredTheme.colors?.textInverse,

			'--theme-color-brand-light': preferredTheme.colors?.brandLight,
			'--theme-color-brand-medium': preferredTheme.colors?.brandMedium,
			'--theme-color-brand-dark': preferredTheme.colors?.brandDark,
			'--theme-color-brand-accent': preferredTheme.colors?.brandAccentColor,

			'--theme-color-body-background': preferredTheme.colors?.bodyBackground,
			'--theme-color-body-background-dark': preferredTheme.colors?.bodyBackgroundDark,

			'--theme-color-navbar-backgound': preferredTheme.colors?.navbarBackground,
			'--theme-color-navbar-backgound-scrolled': preferredTheme.colors?.navbarBackgroundScrolled,
			'--theme-color-navbar-border': preferredTheme.colors?.navbarBorder,

			'--theme-color-link': preferredTheme.colors?.linkColor,
			'--theme-color-link-hover': preferredTheme.colors?.linkHoverColor,

			'--theme-color-grey1': preferredTheme.colors?.Grey1,
			'--theme-color-grey2': preferredTheme.colors?.Grey2,
			'--theme-color-grey3': preferredTheme.colors?.Grey3,
			'--theme-color-grey4': preferredTheme.colors?.Grey4,
			'--theme-color-grey5': preferredTheme.colors?.Grey5,
			'--theme-color-grey6': preferredTheme.colors?.Grey6,
			'--theme-color-grey7': preferredTheme.colors?.Grey7,
			'--theme-color-grey8': preferredTheme.colors?.Grey8,
			'--theme-color-grey9': preferredTheme.colors?.Grey9,
			'--theme-color-grey10': preferredTheme.colors?.Grey10,
			'--theme-color-grey11': preferredTheme.colors?.Grey11,
			'--theme-color-grey12': preferredTheme.colors?.Grey12,
			'--theme-color-grey13': preferredTheme.colors?.Grey13,
			'--theme-color-grey14': preferredTheme.colors?.Grey14,

			'--theme-color-disabled': preferredTheme.colors?.disabledColour,

			'--theme-color-danger': preferredTheme.colors?.danger,
			'--theme-color-warning': preferredTheme.colors?.warning,
			'--theme-color-info': preferredTheme.colors?.info,

			'--theme-color-white': preferredTheme.colors?.white,
			'--theme-color-black': preferredTheme.colors?.black,
		}
	})

	return <div id='themeRoot' className={themeCss}>
		{children}
	</div>
}

export const theme: ThemeValues = {
	colors: {
		text: 'var(--theme-color-text)',
		subText: 'var(--theme-color-sub-text)',
		textInverse: 'var(--theme-color-text-inverse)',
		brandLight: 'var(--theme-color-brand-light)',
		brandMedium: 'var(--theme-color-brand-medium)',
		brandDark: 'var(--theme-color-brand-dark)',
		brandAccentColor: 'var(--theme-color-brand-accent)',
		bodyBackground: 'var(--theme-color-body-background)',
		bodyBackgroundDark: 'var(--theme-color-body-background-dark)',
		navbarBackground: 'var(--theme-color-navbar-background)',
		navbarBackgroundScrolled: 'var(--theme-color-body-navbar-scrolled)',
		navbarBorder: 'var(--theme-color-body-navbar-border)',
		linkColor: 'var(--theme-color-link)',
		linkHoverColor: 'var(--theme-color-link-hover)',
		Grey1: 'var(--theme-color-grey1)',
		Grey2: 'var(--theme-color-grey2)',
		Grey3: 'var(--theme-color-grey3)',
		Grey4: 'var(--theme-color-grey4)',
		Grey5: 'var(--theme-color-grey5)',
		Grey6: 'var(--theme-color-grey6)',
		Grey7: 'var(--theme-color-grey7)',
		Grey8: 'var(--theme-color-grey8)',
		Grey9: 'var(--theme-color-grey9)',
		Grey10: 'var(--theme-color-grey10)',
		Grey11: 'var(--theme-color-grey11)',
		Grey12: 'var(--theme-color-grey12)',
		Grey13: 'var(--theme-color-grey13)',
		Grey14: 'var(--theme-color-grey14)',
		disabledColour: 'var(--theme-color-disabled)',
		danger: 'var(--theme-color-danger)',
		warning: 'var(--theme-color-warning)',
		info: 'var(--theme-color-info)',
		white: 'var(--theme-color-white)',
		black: 'var(--theme-color-black)',
	}
}