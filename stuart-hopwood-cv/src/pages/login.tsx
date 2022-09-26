import React, { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import { Loading, Page } from '../components/layout'
import { theme } from '../Hooks/useTheme'
import { useGlobalStore } from '../state'
import { classes } from './login.css'

const Heading = React.lazy(() => import('../components/typeography/heading'))
const LoginButton = React.lazy(() => import('../components/controls/buttons/loginButton'))
const Loading = React.lazy(() => import('../components/layout/loading/loading'))
const Page = React.lazy(() => import('../components/layout/page/page'))

function Banner() {
	return (
		<h1 className="inverse">Login</h1>
	)
}

export default function Login() {
	const { isAuthenticating } = useGlobalStore()
	const [isAuthPending, setAuthPending] = useState<boolean>(false)
	const sessionValue = sessionStorage.getItem('authPending')
	useEffect(() => {
		if (sessionValue == 'true') {
			setAuthPending(true)
		}
	}, [isAuthenticating])

	function LoginScreen() {
		return <>
			<Heading text="So...You want to login huh?" type="h1" color={theme.brandAccentColor}></Heading>
			<p>
				Well that is nice of you, if you are Stuart Hopwood, go ahead and
				click login and start updating that CV.
				<br />
				If not, this probably isn&apos;t where you should be. Perhap you should
				head to the{' '}
				<Link className="link" to="/home">
					Home page
				</Link>{' '}
				and read what I can do.
			</p>
			<LoginButton />
		</>
	}
	return (
		<Suspense>
			<Page id="Login" fullscreen={false} bannerContent={<Banner />}>
				<div className={classes.login}>
					{!isAuthPending ? <LoginScreen /> : <Loading loading />}
				</div>
			</Page>
		</Suspense>
	)
}