import { domMax, LazyMotion, m, Variants } from 'framer-motion'
import React, { Suspense } from 'react'
import { Picture } from 'react-responsive-picture'
import ProfilePicture200 from '../../../assets/ProfilePicture-200.png'
import ProfilePicture300 from '../../../assets/ProfilePicture-300.png'
import ProfilePicture400 from '../../../assets/ProfilePicture-400.png'
import { theme } from '../../../Hooks/useTheme'
import { mediaQueries } from '../../../style'
import { classes } from './profile.css'

const AboutText = React.lazy(() => import('./aboutText'))
const SocialIcons = React.lazy(() => import('./socialIcons'))
const Heading = React.lazy(() => import('../../typeography/heading'))
const PhoneNumber = React.lazy(() => import('../../controls/links/profile/phoneNumber'))
const Email = React.lazy(() => import('../../controls/links/profile/email'))
const Location = React.lazy(() => import('../../controls/links/profile/location'))
const GithubRepo = React.lazy(() => import('../../controls/links/social/githubRepo'))

export const variants: Variants = {
	offscreen: {
		opacity: 0,
		x: -400
	},
	onscreen: {
		opacity: 1,
		x: 0,
	}
}

export default function Profile() {
	return <Suspense>
		<LazyMotion features={domMax}>
			<m.section id="profile" layout initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: '100px 0px 0px 0px' }} transition={{ duration: 1 }} variants={variants} className={classes.profile}>
				<div className="profilePicture">
					<Picture
						sources={[
							{
								srcSet: ProfilePicture200,
								media: mediaQueries.small,
								innerWidth: 200,
								innerHeight: 200
							},
							{
								srcSet: ProfilePicture300,
								media: mediaQueries.medium,
								innerWidth: 300,
								innerHeight: 300
							},
							{
								srcSet: ProfilePicture300,
								media: mediaQueries.large,
								innerWidth: 300,
								innerHeight: 300
							},
							{
								srcSet: ProfilePicture400,
								media: mediaQueries.xlarge,
								nnerWidth: 400,
								innerHeight: 400
							},
							{
								srcSet: ProfilePicture400,
								media: mediaQueries.xxlarge,
								nnerWidth: 400,
								innerHeight: 400
							},
						]}
					/>
				</div>
				<Heading type="h2" color={theme.brandMedium} text="Hi, I'm Stuart Hopwood" />
				<AboutText />
				<PhoneNumber />
				<Email />
				<Location />
				<GithubRepo />
				<SocialIcons />
			</m.section>
		</LazyMotion>
	</Suspense>
}
