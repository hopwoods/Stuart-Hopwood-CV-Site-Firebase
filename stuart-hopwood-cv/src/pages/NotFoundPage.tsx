
import 'moment-timezone'
import darthImg from '../assets/darthVader.webp'
import ScrollDownIcon from '../components/icons/scrollDownIcon'
import Banner from '../components/layout/banner/banner'
import { theme } from '../style/themeProvider'
import { classes } from './NotFoundPage.css'

// const ScrollDownIcon = React.lazy(() => import('../components/icons/scrollDownIcon'))
// const Banner = React.lazy(() => import('../components/layout/banner/banner'))
export default function NotFoundPage() {

	//TODO: Fix 404 Layout
	return <>
		<Banner id="404" fullscreen={true}>
			<div className={classes.grid}>
				<img src={darthImg} alt="Darth Vader" className={classes.darth} />
				<span className={classes.text}>I find your lack of navigation disturbing.</span>
				<span className={classes.subText}>
					The page you are looking for does not exist.
				</span>
				<div className={classes.mouseIcon}>
					<ScrollDownIcon color={theme.colors.white} />
				</div>
			</div>
		</Banner>
	</>
}
