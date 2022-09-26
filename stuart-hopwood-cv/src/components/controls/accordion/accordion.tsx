import { mergeStyleSets } from '@fluentui/merge-styles'
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import React, { Suspense, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useTheme } from '../../../Hooks'

const AccordionContent = React.lazy(() => import('./accordionContent'))

export type AccordionProps = {
	header?: React.ReactNode
	content?: React.ReactNode
}


export default function Accordion({ header, content }: AccordionProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)
	const theme = useTheme()

	const classes = mergeStyleSets({
		AccordionRoot: {
			marginTop: '1rem'
		},
		AccordionHeaderRoot: {
			display: 'grid',
			gridTemplateColumns: 'auto 3rem',
			gridTemplateRows: 'auto',
			cursor: 'pointer'
		},
		AccordionHeaderContent: {
			gridColumn: '1 / Span 1',
			placeSelf: 'start center',
			userSelect: 'none'
		},
		AccordionHeaderTrigger: {
			gridColumn: '2 / Span 1',
			placeSelf: 'center center',
			cursor: 'pointer',
			fontSize: '1.2em',
			color: theme.Grey12
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
			scaleY: 0,
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.3
			}
		}
	}

	return <Suspense>
		<LazyMotion features={domAnimation}>
			<m.nav initial={false} animate={isOpen ? 'open' : 'closed'} className={classes.AccordionRoot}>
				<m.div whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)} className={classes.AccordionHeaderRoot}>
					<div className={classes.AccordionHeaderContent}>
						{header}
					</div>
					<m.div variants={{ open: { rotate: 180, y: -10 }, closed: { rotate: 0, y: -5 } }} transition={{ duration: animationDuration }} className={classes.AccordionHeaderTrigger}>
						<FaChevronDown />
					</m.div>
				</m.div>
				<m.div variants={contentContainerVariants} layout style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
					{isOpen ? <AccordionContent variants={itemVariants}>{content}</AccordionContent> : <></>}
				</m.div>
			</m.nav>
		</LazyMotion>
	</Suspense>
}