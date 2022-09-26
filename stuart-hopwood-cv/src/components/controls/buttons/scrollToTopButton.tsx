import { mergeStyleSets } from '@fluentui/merge-styles'
import IconButton from '@mui/material/IconButton'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import React, { Suspense } from 'react'
import { HashLink } from 'react-router-hash-link'
import { theme } from '../../../Hooks/useTheme'

const ArrowUpwardIcon = React.lazy(() => import('@mui/icons-material/ArrowUpward'))

type ScrollToTopButtonProps = {
	color: 'primary' | 'secondary' | 'default' | 'inherit' | undefined
}

const classes = mergeStyleSets({
	iconContaier: {
		borderRadius: '50%',
		padding: '0.15rem',
		position: 'relative',
		top: '15px'
	},
	button: {
		':hover': {
			color: `${theme.brandAccentColor} !important`
		}
	}
})

export default function ScrollToTopButton({ color }: ScrollToTopButtonProps) {
	return <Suspense>
		<LazyMotion features={domAnimation}>
			<m.div
				whileHover={{
					boxShadow: 'rgba(251,133,0, 0.25) 0 0 20px 5px, rgba(251,133,0, 0.35) 0 0 10px 5px, inset rgba(251,133,0, 0.45) 0 0 5px 5px'
				}}
				transition={{
					type: 'tween',
					duration: 0.3
				}}
				className={classes.iconContaier}>
				<IconButton aria-label="scroll to top" color={color} size="medium" component={HashLink} to="/#top" smooth className={classes.button}>
					<ArrowUpwardIcon />
				</IconButton>
			</m.div>
		</LazyMotion>
	</Suspense>
}