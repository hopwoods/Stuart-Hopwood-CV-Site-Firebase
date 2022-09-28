import { FaGripLinesVertical } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalStore } from '../../../state/globalStore'
import LogoutLink from '../../controls/links/logoutLink'
import { classes } from './footerNav.css'

export default function FooterNav() {

	const { isAuthenticated } = useGlobalStore()

	return <nav className={classes.nav}>
		<Link to="/home">Home</Link>
		<FaGripLinesVertical />
		{isAuthenticated
			? <>
				<Link to="/admin">Admin</Link>
				<FaGripLinesVertical />
				<LogoutLink>Logout</LogoutLink>
			</>
			: <Link to="/login">Login</Link>
		}
	</nav>
}