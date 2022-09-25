import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { motion } from 'framer-motion'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './App.css'
import { classes } from './App.css'
import { Button } from './components/controls/buttons/button'
import ScrollToTopButton from './components/controls/buttons/scrollToTopButton'
import { About, Page } from './components/layout'
import { Waves } from './components/layout/banner/waves'
import { Titles } from './components/typeography/titles'

//TODO: Switch to dynamic imports

const colors: string[] = [
	//'#8ecae6',
	//'#219ebc',
	//'#023047',
	'#ffb703',
	'#fb8500',
]

//fb8500
function Banner() {
	return (
		<React.Fragment>
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
					Hello I&apos;m <motion.span animate={{ color: colors }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3 }} className="name">Stuart Hopwood</motion.span>
				</span>
				<br />
				<Titles />
			</motion.p>
			<Button className="about" variant="outlined" color="secondary" endIcon={<ArrowDownwardIcon />} component={HashLink} to="/#about" smooth>
				Find Out More
			</Button>
			<Waves />
		</React.Fragment>
	)
}


function App() {
	return (
		<Page id="Home" fullscreen={true} BannerContent={Banner}>
			<About />
			<div className={classes.toTopButton}>
				<ScrollToTopButton color="secondary" />
			</div>
		</Page>
	)
}
export default App

