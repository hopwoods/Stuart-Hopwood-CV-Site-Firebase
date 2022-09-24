import { IconButton } from '@mui/material'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { SocialButtonLinkProps } from '../../../../types'
import { iconVariants } from '../../../layout/about/socialIcons'

export function LinkedInLink({ color, size }: SocialButtonLinkProps) {
	return <LazyMotion features={domAnimation}>
		<m.div variants={iconVariants}>
			<IconButton aria-label="LinkedIn Profile (Stuart Hopwood)" color={color} size={size} href="https://www.linkedin.com/in/stuart-hopwood">
				<FaLinkedin />
			</IconButton></m.div>
	</LazyMotion>
};
