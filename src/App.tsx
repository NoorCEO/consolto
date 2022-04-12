import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import i18n from './i18n';
import { HomeView } from './views';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#4C3CFF',
			},
			secondary: {
				main: '#FF4C3C',
			},
		},
	});
	return (
		<I18nextProvider i18n={i18n}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Routes>
						<Route path='/' element={<HomeView />}/>
					</Routes>
				</Router>
			</ThemeProvider>
		</I18nextProvider>
	);
}

export default App;
