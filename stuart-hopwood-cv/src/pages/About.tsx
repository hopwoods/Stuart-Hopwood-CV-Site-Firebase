import React, { Suspense } from 'react'
import Loading from '../components/layout/loading/loading'
import Heading from '../components/typeography/heading'
import { theme } from '../style/themeProvider'
import { classes } from './About.css'

//const Heading = React.lazy(() => import('../components/typeography/heading'))
const Badges = React.lazy(() => import('../components/layout/about/badges'))
const Profile = React.lazy(() => import('../components/layout/about/profile'))
const Skills = React.lazy(() => import('../components/layout/about/skills'))
// const TriangleDown = React.lazy(() => import('../components/layout/background/triangleDown'))

export default function About() {
	return <><div id="about" className={classes.about}>
		<Heading color={theme.colors.brandAccentColor} type="h1" text="About" className="header" />
		<Suspense fallback={<Loading loading />}>
			<Badges />
		</Suspense>
		<Suspense fallback={<Loading loading />}>
			<Profile />
			<Skills />
		</Suspense>
	</div>
	</>
}
