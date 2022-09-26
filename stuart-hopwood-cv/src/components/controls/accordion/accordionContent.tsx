import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'

export type AccordionContentProps = {
	children: React.ReactNode
	variants: Variants
}

export default function AccordionContent({ children, variants }: AccordionContentProps) {
	return <LazyMotion features={domAnimation}>
		<m.div layout variants={variants}>{children}</m.div>
	</LazyMotion>
}
