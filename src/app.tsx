import { Routes, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Translation, useTranslation } from 'react-i18next';
/* import i18n from "./i18n/i18n.config"; */

import { beforeMountEffect } from './auxiliar/beforeMountEffect';

//Components
import Link from './components/link/link';
import RouterButton from './components/routerbutton/router.button';
import Menu from './components/routermenu/router.menu';
import IdiomSmall from './components/idiom/idiom.small';
import ThemeSmall from './components/theme/theme.small';
import { LogoRender } from './components/logo/logo.render';

//White Assets
import github from './assets/white/github.svg';
import discord from './assets/white/discord.svg';
import spotify from './assets/white/spotify.svg';
import external from './assets/white/external.svg';

//Css
import './app.css';
import 'normalize.css';

//Routes
import routes from './routes';

//Contexts
import { UserConfig } from './context/user.config';

export default function App() {
	const { t } = useTranslation();
	const { lang, theme } = useContext(UserConfig);

	try {
		const pathname = useLocation().pathname;
		beforeMountEffect(() => {
			document.title = `Portfolio - ${routes.find((r) => r.element.props.path === pathname)?.name ?? 'Not found'}`;
			const $root = document.querySelector("html");
			if ($root) $root.className = theme.get();
		}, {
			deps: [routes, pathname],
			state: useState(false)
		});

		/*
		const [dots, setDots] = useState("");

		useEffect(() => {
			const effect = setTimeout(() => {
				if (dots.length >= 3) setDots("");
				else setDots((prev) => `${prev}.`);
			}, 333);

			return () => clearTimeout(effect);
		});

		if (!loaded) {
			return (
				<div id="loading-view">
					<h1>{t('loading', {
						lng: config.language.value
					})}{dots}</h1>
				</div>
			);
		}
		*/

		return (
			<>
				<div id="root">
					<header id="navbar">
						<Menu menuId="drop-menu" />
						<LogoRender id="1125490330679115847" />
						<div id="routes">
							{routes
								.filter((r) => r.include ?? true)
								.map((r) => (
									<Translation key={`route.${r.name.toLowerCase()}.parent`}>
										{
											t =>
												<RouterButton
													href={r.element.props.path}
													name={t(`route.${r.name.toLowerCase()}`, {
														lng: lang.get()
													})}
													active={r.element.props.path === pathname}
												/>
										}
									</Translation>
								))}
						</div>
						<div id="config">
							<ThemeSmall />
							<IdiomSmall />
						</div>
						<div id="links">
							<Link
								url="https://github.com/KingsBeCattz/"
								src={github}
								alt="Github"
								size="var(--link-size)"
								target={'_blank'}
							/>
							<Link
								url="https://example.com"
								src={discord}
								alt="Discord"
								size="var(--link-size)"
								target={'_blank'}
							/>
							<Link
								url="https://example.com"
								src={spotify}
								alt="Spotify"
								size="var(--link-size)"
								target={'_blank'}
							/>
						</div>
					</header>
					<main id="view">
						<Routes>{routes.map((r) => r.element)}</Routes>
					</main>
					<footer id="footer">
						<span>
							{t("maded.with", {
								lng: lang.get()
							})}{' '}<span style={{ fontFamily: "Noto Color Emoji", fontSize: "1.33ch" }}>❤</span>{' '}{t("and", {
								lng: lang.get()
							})}{' '}
							<a
								id="vite-text"
								href="https://vitejs.dev/"
								target="_blank"
								rel="noreferrer"
							>
								Vite
							</a>{' '}
							+{' '}
							<a
								id="react-text"
								href="https://react.dev/"
								target="_blank"
								rel="noreferrer"
							>
								React
							</a>
						</span>
						<a id="web-source" href="https://github.com/KingsBeCattz/Portfolio-Vite" target="_blank" rel="noreferrer">
							{t("see.source", {
								lng: lang.get()
							})}
							<img src={external} alt="" className='theme-rotate' />
						</a>
					</footer>
				</div>
				<div id="drop-menu">
					<Menu active={true} ignore={true} menuId="drop-menu" />
				</div>
			</>
		);
	} catch (err) {
		let error = err;
		if (!(error instanceof Error)) error = new Error(String(err));

		beforeMountEffect(() => {
			document.title = "Portfolio - Un expected error";
		}, {
			state: useState(false)
		});

		return (
			<div id="error-view">
				<h1>{t("unexpected.error")}</h1>
				<div>{(error as Error).stack ?? (error as Error).message}</div>
			</div>
		);
	}
}
