import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { theme } from '../../../style/themeProvider'
import Email from '../../controls/links/profile/email'
import Location from '../../controls/links/profile/location'
import PhoneNumber from '../../controls/links/profile/phoneNumber'
import { SocialLink, SocialLinkColors } from '../../controls/links/social/socialLink'
import Heading from '../../typeography/heading'
import { classes } from './footer.css'
import FooterNav from './footerNav'

export default function Footer() {
	const GetYear = () => {
		const date = new Date()
		return date.getFullYear()
	}

	const socialLinkColors: SocialLinkColors = {
		container: theme.colors.bodyBackgroundDark,
		containerHover: theme.colors.bodyBackground,
		logo: theme.colors.brandAccentColor,
		logoHover: theme.colors.bodyBackgroundDark
	}

	return (
		<footer className={classes.footer}>
			<section className={classes.menu}>
				<Heading type="h4" color={theme.colors.footerHeading} text="Menu" className={classes.navHeader} />
				<FooterNav />
			</section>
			<section className={classes.contact}>
				<Heading type="h4" color={theme.colors.footerHeading} text="Get In Touch" />
				<PhoneNumber color={theme.colors.footerText} />
				<Email color={theme.colors.footerText} />
				<Location color={theme.colors.footerText} />
			</section>
			<section className={classes.follow}>
				<Heading type="h4" color={theme.colors.footerHeading} text="Follow" />
				<div className={classes.socialLinks}>
					<SocialLink url='https://github.com/hopwoods' aria-label="Stuart Hopwood-Keay Github Profile" logo={< FaGithub />} colors={socialLinkColors} />
					<SocialLink url='https://www.linkedin.com/in/stuart-hopwood' aria-label="Stuart Hopwood-Keay LinkedIn profile" logo={<FaLinkedinIn />} colors={socialLinkColors} />
					<SocialLink url='https://www.facebook.com/stoo.hopwood' aria-label="Stuart Hopwood-Keay Facebook page" logo={<FaFacebook />} colors={socialLinkColors} />
					<SocialLink url='https://www.instagram.com/stoo.hopwood/' aria-label="Stuart Hopwood-Keay Instagram profile" logo={<FaInstagram />} colors={socialLinkColors} />
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
