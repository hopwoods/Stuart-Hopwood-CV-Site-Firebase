import { useAppStore } from '../../../state/appStore'
import { classes } from './waves.css'

export default function Waves() {
	const { prefersDark } = useAppStore()

	function WaveElements() {
		if (prefersDark) {
			return <>
				<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 16, 32,0.1" />
				<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 16, 32,0.3)" />
				<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 16, 32,0.5)" />
				<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 16, 32,0.7)" />
				<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0, 16, 32,1)" />
			</>
		} else {
			return <>
				<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255, 255, 255,0.1" />
				<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 255, 255,0.3)" />
				<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 255, 255,0.7)" />
				<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255, 255, 255,1)" />
				<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 255, 255,0.5)" />
			</>
		}
	}
	return <div className={classes.waveContainer}>
		<svg className={classes.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
			<defs>
				<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
			</defs>
			<g className={classes.parallax}>
				<WaveElements />
			</g>
		</svg>
	</div>
}
