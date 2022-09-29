import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import ProfilePicture200 from '../../../assets/ProfilePicture-200.webp'
import ProfilePicture300 from '../../../assets/ProfilePicture-300.webp'
import ProfilePicture400 from '../../../assets/ProfilePicture-400.webp'
import { theme } from '../../../Hooks/useTheme'
import { mediaQueries } from '../../../style'
import Email from '../../controls/links/profile/email'
import Location from '../../controls/links/profile/location'
import PhoneNumber from '../../controls/links/profile/phoneNumber'
import GithubRepo from '../../controls/links/social/githubRepo'
import Heading from '../../typeography/heading'
import AboutText from './aboutText'
import { classes } from './profile.css'
import SocialIcons from './socialIcons'

// const AboutText = React.lazy(() => import('./aboutText'))
// const SocialIcons = React.lazy(() => import('./socialIcons'))
// const Heading = React.lazy(() => import('../../typeography/heading'))
// const PhoneNumber = React.lazy(() => import('../../controls/links/profile/phoneNumber'))
// const Email = React.lazy(() => import('../../controls/links/profile/email'))
// const Location = React.lazy(() => import('../../controls/links/profile/location'))
// const GithubRepo = React.lazy(() => import('../../controls/links/social/githubRepo'))

export const variants: Variants = {
	offscreen: {
		opacity: 0,
		filter: 'blur(20px)'
	},
	onscreen: {
		opacity: 1,
		filter: 'blur(0px)'
	}
}

export default function Profile() {
	return <>
		<LazyMotion features={domAnimation}>
			<m.section id="profile" layout initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: '0px 0px 0px 0px' }} transition={{ duration: 2 }} variants={variants} className={classes.profile}>
				<div className="profilePicture">
					<picture>
						<source srcSet={ProfilePicture200} media={mediaQueries.small} type="image/webp" height="200" width="200" />
						<source srcSet={ProfilePicture300} media={mediaQueries.medium} type="image/webp" height="300" width="300" />
						<source srcSet={ProfilePicture300} media={mediaQueries.large} type="image/webp" height="300" width="300" />
						<source srcSet={ProfilePicture400} media={mediaQueries.xlarge} type="image/webp" height="400" width="400" />
						<source srcSet={ProfilePicture400} media={mediaQueries.xxlarge} type="image/webp" height="400" width="400" />
						<img alt="Stuart Hopwood" srcSet={ProfilePicture400} loading="lazy" />
					</picture>
				</div>
				<Heading type="h2" color={theme.brandMedium} text="Hi, I'm Stuart Hopwood" />
				<AboutText />
				<PhoneNumber color={theme.Grey12} />
				<Email color={theme.Grey12} />
				<Location color={theme.Grey12} />
				<GithubRepo />
				<SocialIcons />
			</m.section>
		</LazyMotion>
	</>
}
