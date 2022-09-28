import { useTheme } from '../../../Hooks/useTheme'
import Heading from '../../typeography/heading'
import { classes } from './footer.css'
import FooterNav from './footerNav'

export default function Footer() {
	const theme = useTheme()
	const GetYear = () => {
		const date = new Date()
		return date.getFullYear()
	}

	return (
		<footer className={classes.footer}>
			<section className={classes.menu}>
				<Heading type="h4" color={theme.brandMedium} text="Menu" />
				<FooterNav />
			</section>
			<section className={classes.contact}>
				<Heading type="h4" color={theme.brandMedium} text="Get In Touch" />
			</section>
			<section className={classes.follow}>
				<Heading type="h4" color={theme.brandMedium} text="Follow" />
			</section>
			<section className={classes.copyright}>
				<a href='https://github.com/hopwoods/Stuart-Hopwood-CV-Site-Firebase/blob/main/LICENSE' target="_blank" rel='noreferrer'>
					&copy; Stuart Hopwood {GetYear()} (MIT license)
				</a>
			</section>
		</footer>
	)
};
