import { ThemeProvider as MaterialThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'
import DataProvider from './components/database/dataProvider'
import './index.css'
import Router from './routes/router'
import { materialTheme } from './style'
import { defaultTheme } from './style/theme'
import { ThemeProvider } from './style/themeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<MaterialThemeProvider theme={materialTheme}>
		<ThemeProvider theme={defaultTheme}>
			<DataProvider>
				<Router />
			</DataProvider>
		</ThemeProvider>
	</MaterialThemeProvider>
)
