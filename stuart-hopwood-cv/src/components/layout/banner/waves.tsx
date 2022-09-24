import { classes } from './waves.css'

export function Waves() {
	return <div className={classes.waveContainer}>
		<svg className={classes.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
			<defs>
				<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
			</defs>
			<g className={classes.parallax}>
				<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(2,48,71,0.3" />
				<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(2,48,71,0.4)" />
				<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(2,48,71,0.2)" />
				<use xlinkHref="#gentle-wave" x="48" y="4" fill="rgba(2,48,71,1)" />
			</g>
		</svg>
	</div>
}