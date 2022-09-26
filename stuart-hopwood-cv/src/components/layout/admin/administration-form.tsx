import { ReactNode } from 'react'
import { classes } from './administration-form.css'

export default function AdminForm({ children }: { children: ReactNode }) {
	return <form noValidate autoComplete="off" className={classes.adminForm}>
		{children}
	</form>
}