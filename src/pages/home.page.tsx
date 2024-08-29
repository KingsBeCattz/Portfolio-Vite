import { useContext, useState } from 'react';
import './home.page.css';
import { typingEffectLoop } from '../auxiliar/typingEffect';
import { useTranslation } from 'react-i18next';

import Message from '../components/message/message';
import Embed from '../components/embed/embed';
import { UserConfig } from '../context/user.config';

function HomePage() {
	const { t } = useTranslation();
	const [currentText, setCurrentText] = useState('');
	const { lang } = (useContext(UserConfig));

	typingEffectLoop(
		[t('title.frontend-dev', {
			lng: lang.get()
		}), t('title.backend-dev', {
			lng: lang.get()
		}), t('title.ts-dev', {
			lng: lang.get()
		}), t('title.js-dev', {
			lng: lang.get()
		})],
		5000,
		setCurrentText
	);

	return (
		<>
			<h1 className="typing">
				<span>{currentText}</span>
			</h1>
			<div className="messages">
				<Message id="1125490330679115847" date={new Date()}>
					<Embed title="AAAAA">A</Embed>
				</Message>
				<Message id="852970774067544165" date={new Date()}>
					Message
				</Message>
				<Message id="1242379095862415360" date={new Date()}>
					Message
				</Message>
				<Message id="1001231584692797570" date={new Date()}>
					Message
				</Message>
			</div>
		</>
	);
}

export default HomePage;
