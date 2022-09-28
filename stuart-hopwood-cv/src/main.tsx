import { ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/router'
import { materialTheme } from './style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider theme={materialTheme}>
		<Router />
	</ThemeProvider>
)
