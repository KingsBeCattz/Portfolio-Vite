import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app.tsx';
import './index.css';
import { Config } from './context/user.config.tsx';
import './i18n/i18n.config.ts';

createRoot(document.getElementById('app') as HTMLElement).render(
	<StrictMode>
		<Config>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Config>
	</StrictMode>
);
