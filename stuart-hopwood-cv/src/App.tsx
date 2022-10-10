import { motion } from 'framer-motion'
import './App.css'
import { classes } from './App.css'
import LinkButton from './components/controls/buttons/linkButton'
import Waves from './components/layout/banner/waves'
import Page from './components/layout/page/page'
import Titles from './components/typeography/titles'
import About from './pages/About'


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
			<span className={classes.bannerText}>
				Hello I&apos;m <motion.span animate={{ color: colors }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }} className="name">Stuart Hopwood-Keay</motion.span>
			</span>
			<br />
			<Titles />
		</motion.p>
		<LinkButton className="about" href='#about'>
			Find Out More
		</LinkButton>
		<Waves />
	</>
	)
}
export default function App() {
	return <Page id="Home" fullscreen={true} bannerContent={<Banner />}>
		<About />
	</Page>
}