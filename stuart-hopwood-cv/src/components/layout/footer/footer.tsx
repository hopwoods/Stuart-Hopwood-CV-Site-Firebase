import { ReactNode } from 'react'
import { classes } from './footer.css'

export default function Footer({ children }: { children?: ReactNode }) {
	const GetYear = () => {
		const date = new Date()
		return date.getFullYear()
	}

	return (
		<footer className={classes.footer}>
			{children}
			<span className={classes.copyright}>
				<a href='https://github.com/hopwoods/Stuart-Hopwood-CV-Site-Firebase/blob/main/LICENSE' target="_blank" rel='noreferrer'>
					&copy; Created by Stuart Hopwood under MIT license -  {GetYear()}
				</a>
			</span>
		</footer>
	)
};
