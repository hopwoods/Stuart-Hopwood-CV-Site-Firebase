import { Link } from 'react-router-dom'
import { useAppStore } from '../../../state/appStore'
import LogoutLink from '../../controls/links/logoutLink'
import { classes } from './footerNav.css'

export default function FooterNav() {

	const { isAuthenticated } = useAppStore()

	return <nav className={classes.nav}>
		<Link to="/home">Home</Link>
		{isAuthenticated
			? <>
				<Link to="/admin">Admin</Link>
				<LogoutLink>Logout</LogoutLink>
			</>
			: <Link to="/login">Login</Link>
		}
	</nav>
}