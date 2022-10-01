import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../components/controls/buttons/loginButton'
import Loading from '../components/layout/loading/loading'
import Page from '../components/layout/page/page'
import Heading from '../components/typeography/heading'
import { useAppStore } from '../state/appStore'
import { theme } from '../style/themeProvider'
import { classes } from './login.css'


function Banner() {
	return (
		<h1 className="inverse">Login</h1>
	)
}

export default function Login() {
	const { isAuthenticating } = useAppStore()
	const [isAuthPending, setAuthPending] = useState<boolean>(false)
	const sessionValue = useMemo(() => sessionStorage.getItem('authPending'), [])

	useEffect(() => {
		if (sessionValue == 'true') {
			setAuthPending(true)
		} else {
			setAuthPending(false)
		}
	}, [isAuthenticating, sessionValue, isAuthPending])

	function LoginScreen() {
		return <>
			<Heading text="So...You want to login huh?" type="h1" color={theme.colors?.brandAccentColor} className={classes.heading} />
			<p>
				Well that is nice of you, if you are Stuart Hopwood, go ahead and
				click login and start updating that CV.
				<br />
				If not, this probably isn&apos;t where you should be.<br />
				Perhaps you should head to the{' '}
				<Link className="link" to="/home">
					Home page
				</Link>{' '}
				and read what I can do.
			</p>
			<LoginButton />
		</>
	}
	return (
		<Page id="Login" fullscreen={false} bannerContent={<Banner />}>
			<div className={classes.login}>
				{!isAuthPending ? <LoginScreen /> : <Loading loading />}
			</div>
		</Page>
	)
}