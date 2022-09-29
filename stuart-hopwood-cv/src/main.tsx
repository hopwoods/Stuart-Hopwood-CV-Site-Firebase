import { ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'
import DataProvider from './components/database/dataProvider'
import './index.css'
import Router from './routes/router'
import { materialTheme } from './style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider theme={materialTheme}>
		<DataProvider>
			<Router />
		</DataProvider>
	</ThemeProvider>
)
