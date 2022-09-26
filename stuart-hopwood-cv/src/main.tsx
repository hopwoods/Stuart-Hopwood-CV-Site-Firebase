import { ThemeProvider } from '@mui/material'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { materialTheme } from './style'

const Router = React.lazy(() => import('./routes/useRoutes'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Suspense>
		<ThemeProvider theme={materialTheme}>
			<Router />
		</ThemeProvider>
	</Suspense>
)
