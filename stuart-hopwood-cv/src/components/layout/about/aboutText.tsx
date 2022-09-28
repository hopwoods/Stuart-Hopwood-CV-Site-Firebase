import parse from 'html-react-parser'
import { useAboutTextStore } from '../../../state/aboutTextStore'
import { typography } from '../../typeography/typography.css'
import Loading from '../loading/loading'
import { classes } from './aboutText.css'

// const Loading = React.lazy(() => import('../loading/loading'))

export default function AboutText() {
	const { aboutText, loading } = useAboutTextStore()

	function AboutTextElement() {
		if (aboutText)
			return <div className={`${classes.aboutText} ${typography.copy1}`}>{parse(aboutText.text)}</div>
		else
			return <></>
	}

	return <>
		{
			loading
				? <Loading />
				: <AboutTextElement />
		}
	</>
}
