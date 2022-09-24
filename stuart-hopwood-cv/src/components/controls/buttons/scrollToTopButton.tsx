import { mergeStyleSets } from '@fluentui/merge-styles'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { IconButton } from '@mui/material'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

type ScrollToTopButtonProps = {
	color: 'primary' | 'secondary' | 'default' | 'inherit' | undefined;
};

const classes = mergeStyleSets({
	iconContaier: {
		borderRadius: '50%',
		padding: '0.15rem',
		position: 'relative',
		top: '15px'
	}
})

export function ScrollToTopButton({ color }: ScrollToTopButtonProps) {
	return <LazyMotion features={domAnimation}>
		<m.div
			whileHover={{
				boxShadow: 'rgba(255,255,255, 0.45) 0 0 20px 5px, rgba(255,255, 255, 0.25) 0 0 10px 10px, inset rgba(255,255,255, 0.45) 0 0 10px 5px',
			}}
			transition={{
				type: 'tween',
				duration: 0.3
			}}
			className={classes.iconContaier}>
			<IconButton aria-label="scroll to top" color={color} size="medium" component={HashLink} to="/#top" smooth>
				<ArrowUpwardIcon />
			</IconButton>
		</m.div>
	</LazyMotion>

}



export default ScrollToTopButton
