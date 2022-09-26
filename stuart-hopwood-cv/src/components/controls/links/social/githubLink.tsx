import { IconButton } from '@mui/material'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SocialButtonLinkProps } from '../../../../types'
import { iconVariants } from '../../../layout/about/socialIcons'

export default function GithubLink({ color, size, }: SocialButtonLinkProps) {
	return <LazyMotion features={domAnimation}>
		<m.div variants={iconVariants}>
			<IconButton aria-label="GitHub Profile (Stuart Hopwood)" color={color} size={size} href="https://github.com/hopwoods">
				<FaGithub />
			</IconButton></m.div>
	</LazyMotion>
}
