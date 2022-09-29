import { mergeStyleSets } from '@fluentui/merge-styles'
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useTheme } from '../../../Hooks'
import AccordionContent from './accordionContent'

export type AccordionProps = {
	header?: React.ReactNode
	content?: React.ReactNode
}


export default function Accordion({ header, content }: AccordionProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)
	const theme = useTheme()

	const classes = mergeStyleSets({
		AccordionRoot: {
			marginTop: '1em'
		},
		AccordionHeaderRoot: {
			display: 'grid',
			gridTemplateColumns: 'auto 2.7em',
			gridTemplateRows: 'auto',
			cursor: 'pointer'
		},
		AccordionHeaderContent: {
			gridColumn: '1 / Span 1',
			placeSelf: 'start stretch',
			userSelect: 'none',
			'-webkit-tap-highlight-color': 'transparent',
		},
		AccordionHeaderTrigger: {
			gridColumn: '2 / Span 1',
			placeSelf: 'center ',
			placeItems: 'center',
			cursor: 'pointer',
			fontSize: '1.2em',
			color: theme.Grey12,

			'svg': {
				position: 'relative',
				top: '0.5em'
			}
		}
	})

	const animationDuration = 0.4

	const itemVariants: Variants = {
		open: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 300, damping: 24 }
		},
		closed: { opacity: 0, y: -20, transition: { duration: animationDuration } }
	}

	const contentContainerVariants: Variants = {
		open: {
			height: '100%',
			scaleY: 1,
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.7,
				delayChildren: 0.3,
				staggerChildren: 0.05
			}
		},
		closed: {
			height: 0,
			scaleY: 1,
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.3,
				delayChildren: -0.3,
				staggerChildren: -0.05
			}
		}
	}

	return <LazyMotion features={domAnimation}>
		<m.nav initial={false} animate={isOpen ? 'open' : 'closed'} className={classes.AccordionRoot}>
			<m.div whileTap={{ scale: 1 }} onClick={() => setIsOpen(!isOpen)} className={classes.AccordionHeaderRoot}>
				<div className={classes.AccordionHeaderContent}>
					{header}
				</div>
				<m.div variants={{ open: { rotateX: 180, y: 10 }, closed: { rotateX: 0, y: -5 } }} transition={{ duration: animationDuration }} className={classes.AccordionHeaderTrigger}>
					<FaChevronDown />
				</m.div>
			</m.div>
			<m.div variants={contentContainerVariants} layout style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
				{isOpen ? <AccordionContent variants={itemVariants}>{content}</AccordionContent> : <></>}
			</m.div>
		</m.nav>
	</LazyMotion>
}