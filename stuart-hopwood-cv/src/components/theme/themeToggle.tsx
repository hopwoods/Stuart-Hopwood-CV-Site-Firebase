import { mergeStyleSets } from '@fluentui/merge-styles'
import * as Toggle from '@radix-ui/react-toggle'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAppStore } from '../../state/appStore'
import { theme } from '../../style/themeProvider'

export function ThemeToggle({ className }: { className?: string }) {
	const { prefersDark, setPrefersDarkTheme } = useAppStore()

	return <Toggle.Root defaultPressed id="s1" className={`${className} ${classes.root}`} pressed={prefersDark} onPressedChange={() => setPrefersDarkTheme(!prefersDark)}>
		{prefersDark ? <FaMoon /> : <FaSun />}
	</Toggle.Root>
}

const classes = mergeStyleSets({
	root: {
		all: 'unset',
		backgroundColor: 'transparent',
		color: theme.colors.toggleColor,
		height: 35,
		width: 35,
		borderRadius: 4,
		display: 'flex',
		lineHeight: 1,
		alignItems: 'center',
		margin: '0.3em',
		cursor: 'pointer',
		'&:hover': {
			color: theme.colors.brandAccentColor,
			transition: '0.5s'
		},
		'&[data-state=on]': {
			color: theme.colors.toggleColorActive
			, transition: '0.5s',

			':hover': {
				color: theme.colors.brandAccentColor,
				transition: '0.5s'
			}

		},
		'&:focus-visible': { boxShadow: `0 0 0 2px ${theme.colors.boxShadow}` },
	}
})
