import { Route } from 'react-router-dom';
import Home from './pages/home.page';
import Packages from './pages/packages.page'
import Projects from './pages/projects.page'
import NotFound from './pages/not.found';

export default [
	{
		name: 'Home',
		element: <Route path="/" element={<Home/>} />
	},
	{
		name: 'Projects',
		element: <Route path="/projects" element={<Projects/>} />
	},
	{
		name: 'Packages',
		element: <Route path="/packages" element={<Packages/>} />
	},
	{
		name: 'Not Found',
		element: <Route path="/*" element={<NotFound/>} />,
		include: false
	}
];
