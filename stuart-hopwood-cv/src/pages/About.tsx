import React, { Suspense } from 'react'
import { useTheme } from '../Hooks'
import { classes } from './About.css'

const Heading = React.lazy(() => import('../components/typeography/heading'))
const Badges = React.lazy(() => import('../components/layout/about/badges'))
const Profile = React.lazy(() => import('../components/layout/about/profile'))
const Skills = React.lazy(() => import('../components/layout/about/skills'))
const TriangleDown = React.lazy(() => import('../components/layout/background/triangleDown'))

export default function About() {
	const theme = useTheme()
	return <Suspense><div id="about" className={classes.about}>
		<Heading color={theme.brandAccentColor} type="h1" text="About" className="header" />
		<Badges />
		<Profile />
		<Skills />
		<TriangleDown color={theme.bodyBackground} backgroundColor={theme.bodyBackgroundDark} />
	</div>
	</Suspense>
}
