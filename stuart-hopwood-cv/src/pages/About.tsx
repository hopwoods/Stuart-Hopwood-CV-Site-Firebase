import Badges from '../components/layout/about/badges'
import Profile from '../components/layout/about/profile'
import Skills from '../components/layout/about/skills'
import TriangleDown from '../components/layout/background/triangleDown'
import Heading from '../components/typeography/heading'
import { useTheme } from '../Hooks'
import { classes } from './About.css'

// const Heading = React.lazy(() => import('../components/typeography/heading'))
// const Badges = React.lazy(() => import('../components/layout/about/badges'))
// const Profile = React.lazy(() => import('../components/layout/about/profile'))
// const Skills = React.lazy(() => import('../components/layout/about/skills'))
// const TriangleDown = React.lazy(() => import('../components/layout/background/triangleDown'))

export default function About() {
	const theme = useTheme()
	return <><div id="about" className={classes.about}>
		<Heading color={theme.brandAccentColor} type="h1" text="About" className="header" />
		<Badges />
		<Profile />
		<Skills />
		<TriangleDown color={theme.bodyBackground} backgroundColor={theme.bodyBackgroundDark} />
	</div>
	</>
}
