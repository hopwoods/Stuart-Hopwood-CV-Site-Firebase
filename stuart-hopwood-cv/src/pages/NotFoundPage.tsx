
import 'moment-timezone'
import darthImg from '../assets/darthVader.png'
import ScrollDownIcon from '../components/icons/scrollDownIcon'
import Banner from '../components/layout/banner/banner'
import { useTheme } from '../Hooks'
import { classes } from './NotFoundPage.css'

// const ScrollDownIcon = React.lazy(() => import('../components/icons/scrollDownIcon'))
// const Banner = React.lazy(() => import('../components/layout/banner/banner'))
export default function NotFoundPage() {
	const themeColors = useTheme()

	//TODO: Fix 404 Layout
	//TODO: Create an Error Page
	return <>
		<Banner id="404" fullscreen={true}>
			<div className={classes.grid}>
				<img src={darthImg} alt="Darth Vader" className={classes.darth} />
				<span className={classes.text}>I find your lack of navigation disturbing.</span>
				<span className={classes.subText}>
					The page you are looking for does not exist.
				</span>
				<div className={classes.mouseIcon}>
					<ScrollDownIcon color={themeColors.white} />
				</div>
			</div>
		</Banner>
	</>
}
