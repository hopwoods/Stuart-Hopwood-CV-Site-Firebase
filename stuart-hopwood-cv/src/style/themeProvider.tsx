import { ReactNode, useEffect, useMemo } from 'react'
import { useAppStore } from '../state/appStore'
import { ThemeColors } from '../types/ThemeColors'

export function ThemeProvider({ children, theme, darkTheme }: ThemeProviderProps) {
	const { prefersDark, setPrefersDarkTheme } = useAppStore()
	const elementId = useMemo(() => { return `theme-root-${makeId()}` }, [])

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		const themePreference = event.matches ? 'dark' : 'light'
		setPrefersDarkTheme(themePreference === 'dark')
	})

	useEffect(() => {
		console.log(`Preferred Theme is ${prefersDark ? 'dark' : 'light'}`)
		const preferredTheme = prefersDark && darkTheme ? darkTheme : theme

		const themeVariableMappings: ThemeVariableMapping[] = [
			{ property: '--theme-color-text', value: preferredTheme.colors?.text },
			{ property: '--theme-color-sub-text', value: preferredTheme.colors?.subText },
			{ property: '--theme-color-text-inverse', value: preferredTheme.colors?.textInverse },
			{ property: '--theme-color-brand-light', value: preferredTheme.colors?.brandLight },
			{ property: '--theme-color-brand-medium', value: preferredTheme.colors?.brandMedium },
			{ property: '--theme-color-brand-dark', value: preferredTheme.colors?.brandDark },
			{ property: '--theme-color-brand-accent', value: preferredTheme.colors?.brandAccentColor },
			{ property: '--theme-color-body-background', value: preferredTheme.colors?.bodyBackground },
			{ property: '--theme-color-body-background-dark', value: preferredTheme.colors?.bodyBackgroundDark },
			{ property: '--theme-color-navbar-backgound', value: preferredTheme.colors?.navbarBackground },
			{ property: '--theme-color-navbar-backgound-scrolled', value: preferredTheme.colors?.navbarBackgroundScrolled },
			{ property: '--theme-color-navbar-border', value: preferredTheme.colors?.navbarBorder },
			{ property: '--theme-color-link', value: preferredTheme.colors?.linkColor },
			{ property: '--theme-color-link-hover', value: preferredTheme.colors?.linkHoverColor },
			{ property: '--theme-box-shadow', value: preferredTheme.colors?.boxShadow },
			{ property: '--theme-color-grey1', value: preferredTheme.colors?.Grey1 },
			{ property: '--theme-color-grey2', value: preferredTheme.colors?.Grey2 },
			{ property: '--theme-color-grey3', value: preferredTheme.colors?.Grey3 },
			{ property: '--theme-color-grey4', value: preferredTheme.colors?.Grey4 },
			{ property: '--theme-color-grey5', value: preferredTheme.colors?.Grey5 },
			{ property: '--theme-color-grey6', value: preferredTheme.colors?.Grey6 },
			{ property: '--theme-color-grey7', value: preferredTheme.colors?.Grey7 },
			{ property: '--theme-color-grey8', value: preferredTheme.colors?.Grey8 },
			{ property: '--theme-color-grey9', value: preferredTheme.colors?.Grey9 },
			{ property: '--theme-color-grey10', value: preferredTheme.colors?.Grey10 },
			{ property: '--theme-color-grey11', value: preferredTheme.colors?.Grey11 },
			{ property: '--theme-color-grey12', value: preferredTheme.colors?.Grey12 },
			{ property: '--theme-color-grey13', value: preferredTheme.colors?.Grey13 },
			{ property: '--theme-color-grey14', value: preferredTheme.colors?.Grey14 },
			{ property: '--theme-color-disabled', value: preferredTheme.colors?.disabledColour },
			{ property: '--theme-color-danger', value: preferredTheme.colors?.danger },
			{ property: '--theme-color-warning', value: preferredTheme.colors?.warning },
			{ property: '--theme-color-info', value: preferredTheme.colors?.info },
			{ property: '--theme-color-white', value: preferredTheme.colors?.white },
			{ property: '--theme-color-black', value: preferredTheme.colors?.black },
		]

		for (const property of themeVariableMappings) {
			setCssVariableById(elementId, property.property, property.value)
		}

		setCssVariableOnRoot('--theme-color-body-background-dark', preferredTheme.colors?.bodyBackgroundDark)

	}, [darkTheme, elementId, prefersDark, theme])

	return <div id={elementId}>
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
		boxShadow: 'var(--theme-box-shadow)',
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

function setCssVariableById(elementId: string, property: string, value: string) {
	document.getElementById(elementId)?.style.setProperty(
		property,
		value
	)
}
function setCssVariableOnRoot(property: string, value: string) {
	document.documentElement?.style.setProperty(
		property,
		value
	)
}

type ThemeVariableMapping = {
	property: string,
	value: string
}

/** JS to CSS Custom Property Mapping to support easy development */
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

const makeId = () => {
	const idLength = 6
	let result = ''
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charactersLength = characters.length
	for (let i = 0;i < idLength;i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength))
	}
	return result
}