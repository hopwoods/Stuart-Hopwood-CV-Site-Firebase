/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaBahai, FaBookMedical, FaUserAlt } from 'react-icons/fa'
import { AdminMenuLink } from '../../controls'
import { classes } from './administration-menu.css'

type AdminMenuProps = {
	children?: React.ReactNode
}

export function AdminMenu({ children }: AdminMenuProps) {
	return <div className={classes.adminMenu}>
		<AdminMenuLink to="/admin/about-text" value="About Text">
			<FaUserAlt />
		</AdminMenuLink>
		<AdminMenuLink to="/admin/badges" value="Badges">
			<FaBahai />
		</AdminMenuLink>
		<AdminMenuLink to="/admin/skills" value="Skills">
			<FaBookMedical />
		</AdminMenuLink>
	</div>
}

export default AdminMenu
