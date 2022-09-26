import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { classes } from './adminMenuLink.css'
type LinkProps = {
	to: string
	value: string
	children: ReactNode
}

export default function AdminMenuLink({ to, value, children }: LinkProps) {
	return (
		<span className={classes.menuLink}>
			{children}
			<NavLink to={to}>{value}</NavLink>
		</span>
	)
};
