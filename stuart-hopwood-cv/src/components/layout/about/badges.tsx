import { domMax, LazyMotion, m } from 'framer-motion'
import React, { Suspense } from 'react'
import { classes } from './badges.css'
const Badge = React.lazy(() => import('./badge'))
export default function Badges() {
	return <Suspense>
		<LazyMotion features={domMax}>
			<m.section id="badges" initial="offscreen" whileInView="onscreen" viewport={{ once: true }} transition={{ staggerChildren: 0.35 }} layout className={classes.badges}>
				<Badge>Badge 1</Badge>
				<Badge>Badge 2</Badge>
				<Badge>Badge 3</Badge>
				<Badge>Badge 4</Badge>
			</m.section>
		</LazyMotion>
	</Suspense>
};
