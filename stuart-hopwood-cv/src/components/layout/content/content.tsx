import { ReactNode } from 'react'
import { classes } from './content.css'

export function Content({ children }: { children: ReactNode }) {
	return <article className={classes.content}>{children}</article>
}
