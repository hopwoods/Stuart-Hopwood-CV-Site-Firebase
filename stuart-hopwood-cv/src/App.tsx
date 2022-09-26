import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { motion } from 'framer-motion'
import React, { Suspense } from 'react'
import { HashLink } from 'react-router-hash-link'
import './App.css'
import { classes } from './App.css'

const Button = React.lazy(() => import('./components/controls/buttons/button'))
const ScrollToTopButton = React.lazy(() => import('./components/controls/buttons/scrollToTopButton'))
const About = React.lazy(() => import('./pages/About'))
const Page = React.lazy(() => import('./components/layout/page/page'))
const Waves = React.lazy(() => import('./components/layout/banner/waves'))
const Titles = React.lazy(() => import('./components/typeography/titles'))

const colors: string[] = [
	'#ffb703',
	'#fb8500',
]

function Banner() {
	return (<>
		<motion.p
			initial={{
				scale: 0.5,
				opacity: 0,
				filter: 'blur(5px)'
			}}
			animate={{
				scale: 1,
				opacity: 1,
				filter: 'blur(0px)'
			}}
			transition={{
				type: 'spring',
				bounce: 0.6,
				duration: 1,
				stiffness: 400,
				damping: 10
			}} layout
		>
			<span>
				Hello I&apos;m <motion.span animate={{ color: colors }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }} className="name">Stuart Hopwood</motion.span>
			</span>
			<br />
			<Titles />
		</motion.p>
		<Button className="about" variant="outlined" color="secondary" endIcon={<ArrowDownwardIcon />} component={HashLink} to="/#about" smooth>
			Find Out More
		</Button>
		<Waves />
	</>
	)
}
export default function App() {
	return <Suspense>
		<Page id="Home" fullscreen={true} bannerContent={<Banner />}>
			<About />
			<div className={classes.toTopButton}>
				<ScrollToTopButton color="secondary" />
			</div>
		</Page>
	</Suspense>
}