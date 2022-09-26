import { IconButton } from '@mui/material'
import { FaFacebook } from 'react-icons/fa'
import { SocialButtonLinkProps } from '../../../../types'

export default function FacebookLink({ color, size, }: SocialButtonLinkProps) {
	return (
		<IconButton
			aria-label="Facebook Profile (Stuart Hopwood)"
			color={color}
			size={size}
			href="https://www.facebook.com/stoo.hopwood"
		>
			<FaFacebook />
		</IconButton>
	)
};
