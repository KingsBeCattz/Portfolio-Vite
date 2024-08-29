import { useContext, useState } from 'react';
import { typingEffectLoop } from '../auxiliar/typingEffect';
import { useTranslation } from 'react-i18next';
import { UserConfig } from '../context/user.config';

export default () => {
	const { t } = useTranslation();
	const [currentText, setCurrentText] = useState("");
	const { lang } = (useContext(UserConfig));

	typingEffectLoop(
		[t('route.packages', {
			lng: lang.get()
		}), t('js.packages', {
			lng: lang.get()
		}), t('ts.packages', {
			lng: lang.get()
		}), t('npm.modules', {
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
		</>
	);
};
