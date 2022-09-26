import { ReactNode } from 'react'
import { classes } from './content.css'

export default function Content({ children }: { children: ReactNode }) {
	return <main className={classes.content}>{children}</main>
}
