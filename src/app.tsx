import { Routes } from 'react-router-dom';

import Avatar from './components/avatar';
import Link from './components/link/link';

import github from './assets/github.svg'
import discord from './assets/discord.svg'

import './app.css';
import 'normalize.css';

import routes from './routes';

function App() {
	return (
		<>
			<header id="navbar">
				<div id="logo">
					<Avatar
						size={30} radius={50} border={{ color: '#43b581', weight: 2 }} alt="Avatar"
						src="./avatar.png"
					/>
					KingBeCats
				</div>
				<div id="routes">
					{/* biome-ignore lint/correctness/useJsxKeyInIterable: */}
					{routes.filter(r => (r.include ?? true)).map((r) => (<a href={r.element.props.path}>{r.name}</a>))}
				</div>
				<div id="links">
					<Link
						url="https://example.com"
						src={github}
						alt="Github"
						size="var(--logo-size)"
						target={'_blank'}
					/>
					<Link
						url="https://example.com"
						src={discord}
						alt="Discord"
						size="var(--logo-size)"
						target={'_blank'}
					/>
				</div>
			</header>
			<div className="view">
				<Routes>
					{routes.map((r) => (r.element))}
				</Routes>
			</div>
			<footer id="footer">
				<span>
					Maded with ❤ and <a id="vite-text" href="https://vitejs.dev/" target='_blank' rel="noreferrer">Vite</a> + <a id="react-text" href="https://react.dev/" target='_blank' rel="noreferrer">React</a>
				</span><tr/>
				<a id="web-source">
					See the source code
				</a>
			</footer>
		</>
	);
}

export default App;
