import { useContext, useState } from 'react';
import { typingEffectLoop } from '../auxiliar/typingEffect';
import { useTranslation } from 'react-i18next';
import { UserConfig } from '../context/user.config';

import Embed from '../components/embed/embed';
import Message from '../components/message/message';

import './projects.page.css';

export default () => {
	const { t } = useTranslation();
	const [currentText, setCurrentText] = useState("");
	const { lang } = (useContext(UserConfig));

	typingEffectLoop(
		[t('route.projects', {
			lng: lang.get()
		}), t('discord.bots', {
			lng: lang.get()
		}), t('web.pages', {
			lng: lang.get()
		})],
		3500,
		setCurrentText
	);

	return (
		<>
			<h1 className="typing">
				<span>{currentText}</span>
			</h1>
			<div id="project-messages">
				<Message id="1125490330679115847" date={new Date()}>
					For start, one of my projects you are seeing right now is this very website, as it says in the footer, it is built with Vite and pure CSS.
				</Message>
				<Message id="1242379095862415360" date={new Date()}>
					<Embed title="AAAAA">A</Embed>
				</Message>
				<Message id="1242379095862415360" date={new Date()}>
					<Embed title="AAAAA">A</Embed>
				</Message>
				<Message id="1242379095862415360" date={new Date()}>
					<Embed title="AAAAA">A</Embed>
				</Message>
				<Message id="1242379095862415360" date={new Date()}>
					<Embed title="AAAAA">A</Embed>
				</Message>
			</div>
		</>
	);
};
