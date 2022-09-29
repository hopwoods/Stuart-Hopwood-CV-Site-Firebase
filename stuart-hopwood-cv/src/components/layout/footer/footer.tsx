import { useTheme } from '../../../Hooks/useTheme'
import Email from '../../controls/links/profile/email'
import Location from '../../controls/links/profile/location'
import PhoneNumber from '../../controls/links/profile/phoneNumber'
import FacebookLink from '../../controls/links/social/facebookLink'
import GithubLink from '../../controls/links/social/githubLink'
import InstagramLink from '../../controls/links/social/instagramLink'
import LinkedInLink from '../../controls/links/social/linkedInLink'
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
				<PhoneNumber color={theme.Grey4} />
				<Email color={theme.Grey4} />
				<Location color={theme.Grey8} />
			</section>
			<section className={classes.follow}>

				<Heading type="h4" color={theme.brandMedium} text="Follow" />
				<div className={classes.socialLinks}>
					<FacebookLink color="primary" size="medium" />
					<GithubLink color="primary" size="medium" />
					<LinkedInLink color="primary" size="medium" />
					<InstagramLink color="primary" size="medium" />
				</div>
			</section>
			<section className={classes.copyright}>
				<a href='https://github.com/hopwoods/Stuart-Hopwood-CV-Site-Firebase/blob/main/LICENSE' target="_blank" rel='noreferrer'>
					&copy; Stuart Hopwood {GetYear()} (MIT license)
				</a>
			</section>
		</footer>
	)
};
