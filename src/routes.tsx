import { Route } from 'react-router-dom';
import Home from './pages/home.page';
import NotFound from './pages/not.found';

export default [
	{
		name: 'Home',
		element: <Route path="/" element={<Home/>} />
	},
	{
		name: 'Not Found',
		element: <Route path="/*" element={<NotFound/>} />,
		include: false
	}
];
