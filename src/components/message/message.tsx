import { useContext, useState, type ReactNode } from 'react';
import { format } from 'date-fns';
import { t } from "i18next";

import Avatar from '../avatar/avatar';

import VerifiedBot from '../../assets/verified.check.svg';

import './message.css';
import { UserConfig } from '../../context/user.config';

export default ({
	id,
	date,
	children
}: { id: string; date: Date; children: ReactNode; }) => {
	const { lang } = (useContext(UserConfig));
	const [data, setData] = useState(JSON.parse(sessionStorage.getItem(`discord.arts.${id}`) ?? "null"));
	const [status, setStatus] = useState(Boolean(data));

	if (!status) (async () => {
		if (status) return;
		await new Promise((resolve) => resolve(setStatus(true)));
		const $data = await fetch(`https://discord-arts.asure.dev/v1/user/${id}`);
		const $json = await $data.json();

		console.log(`fetch maded, ID: ${$json.data.basicInfo.id}, USERNAME: ${$json.data.basicInfo.username}`);

		setData($json.data);
		sessionStorage.setItem(`discord.arts.${id}`, JSON.stringify($json.data));
	})();

	return (
		<div className="message">
			<Avatar
				size="var(--avatar-size)"
				radius={50}
				alt="Avatar"
				src={
					data?.assets?.avatarURL ?? data?.assets?.defaultAvatarURL ?? null
				}
			/>
			<div className="author-n-date">
				<span className="author">
					{data?.basicInfo?.globalName ??
						data?.basicInfo?.username ??
						'User'}
					<span className={data?.basicInfo?.bot ? "bot-tag" : "hide"}>
						<img src={VerifiedBot} alt="" className={data?.basicInfo?.verified ? "" : "hide"} />
						APP
					</span>
				</span>
				<span className="date">{format(date, t('time.format', {
					lng: lang.get()
				}))}</span>
			</div>
			<div className="content">{children}</div>
		</div>
	);
};

