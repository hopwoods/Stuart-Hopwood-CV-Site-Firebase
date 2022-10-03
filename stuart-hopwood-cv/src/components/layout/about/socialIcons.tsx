import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { theme } from '../../../style/themeProvider'
import { SocialLink, SocialLinkColors } from '../../controls/links/social/socialLink'
import { classes } from './socialIcons.css'

export const iconVariants: Variants = {
	offscreen: {
		scale: 0,
		opacity: 0
	},
	onscreen: {
		scale: [0, 1.2, 1],
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.6,
			duration: 0.8,
		}
	}
}

export default function SocialIcons() {

	const socialLinkColors: SocialLinkColors = {
		container: theme.colors.bodyBackground,
		containerHover: theme.colors.bodyBackgroundDark,
		logo: theme.colors.brandAccentColor,
		logoHover: theme.colors.bodyBackground
	}

	return <LazyMotion features={domAnimation}>
		<m.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} className={`socialIcons ${classes.socialIcons}`}>
			<SocialLink url='https://github.com/hopwoods' aria-label="Stuart Hopwood-Keay Github Profile" logo={< FaGithub />} colors={socialLinkColors} />
			<SocialLink url='https://www.linkedin.com/in/stuart-hopwood' aria-label="Stuart Hopwood-Keay LinkedIn profile" logo={<FaLinkedinIn />} colors={socialLinkColors} />
			<SocialLink url='https://www.facebook.com/stoo.hopwood' aria-label="Stuart Hopwood-Keay Facebook page" logo={<FaFacebook />} colors={socialLinkColors} />
			<SocialLink url='https://www.instagram.com/stoo.hopwood/' aria-label="Stuart Hopwood-Keay Instagram profile" logo={<FaInstagram />} colors={socialLinkColors} />
		</m.div>
	</LazyMotion>
};
