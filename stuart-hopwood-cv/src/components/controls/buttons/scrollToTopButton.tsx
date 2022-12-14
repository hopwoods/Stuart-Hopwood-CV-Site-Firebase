import { mergeStyleSets } from '@fluentui/merge-styles'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import IconButton from '@mui/material/IconButton'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import { theme } from '../../../style/themeProvider'

type ScrollToTopButtonProps = {
	color: 'primary' | 'secondary' | 'default' | 'inherit' | undefined
}

const classes = mergeStyleSets({
	root: {
		gridColumn: '1/span 2',
		display: 'flex',
		placeContent: 'center',
		backgroundColor: theme.colors.bodyBackgroundDark,
		marginTop: '1rem',
		marginBottom: '2rem'
	},
	iconContainer: {
		borderRadius: '50%',
		padding: '0.15rem',
		placeSelf: 'center'
	},
	button: {
		':hover': {
			color: `${theme.colors.brandAccentColor} !important`
		}
	},
})

export default function ScrollToTopButton({ color }: ScrollToTopButtonProps) {
	return <LazyMotion features={domAnimation}>
		<section className={classes.root}>
			<m.div
				whileHover={{
					boxShadow: 'rgba(251,133,0, 0.25) 0 0 20px 5px, rgba(251,133,0, 0.35) 0 0 10px 5px, inset rgba(251,133,0, 0.45) 0 0 5px 5px'
				}}
				transition={{
					type: 'tween',
					duration: 0.3
				}}
				className={classes.iconContainer}>
				<IconButton aria-label="scroll to top" color={color} size="medium" component={HashLink} to="/#top" smooth className={classes.button}>
					<ArrowUpwardIcon />
				</IconButton>
			</m.div>
		</section>
	</LazyMotion>
}