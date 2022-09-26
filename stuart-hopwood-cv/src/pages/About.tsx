import { TriangleDown } from '../components/layout'
import { Badges } from '../components/layout/about/badges'
import { Profile } from '../components/layout/about/profile'
import { Skills } from '../components/layout/about/skills'
import { Heading } from '../components/typeography/heading'
import { useTheme } from '../Hooks'
import { classes } from './About.css'

export function About() {
	const theme = useTheme()
	return <div id="about" className={classes.about}>
		<Heading color={theme.brandAccentColor} type="h1" text="About" className="header" />
		<Badges />
		<Profile />
		<Skills />
		<TriangleDown color={theme.bodyBackground} backgroundColor={theme.bodyBackgroundDark} />
	</div>

}
