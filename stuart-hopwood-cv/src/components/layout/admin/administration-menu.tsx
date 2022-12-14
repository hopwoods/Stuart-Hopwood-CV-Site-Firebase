/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { FaBahai, FaBookMedical, FaUserAlt } from 'react-icons/fa'
import AdminMenuLink from '../../controls/links/adminMenuLink'
import { classes } from './administration-menu.css'

// const AdminMenuLink = React.lazy(() => import('../../controls/links/adminMenuLink'))

type AdminMenuProps = {
	children?: React.ReactNode
}

export default function AdminMenu({ children }: AdminMenuProps) {
	return <>
		<div className={classes.adminMenu}>
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
	</>
}
