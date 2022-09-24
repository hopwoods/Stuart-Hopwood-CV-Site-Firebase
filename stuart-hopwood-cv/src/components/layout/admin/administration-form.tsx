import { ReactNode } from 'react'
import { classes } from './administration-form.css'

export function AdminForm({ children }: { children: ReactNode }) {
	return <form noValidate autoComplete="off" className={classes.adminForm}>
		{children}
	</form>
};

export default AdminForm