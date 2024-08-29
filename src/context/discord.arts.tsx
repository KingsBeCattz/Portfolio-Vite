import { createContext, useState, useEffect } from 'react';

export const DiscordArtsData = createContext<{
	data: {
		data: Partial<DiscordArts>;
		cache_expiry: number;
		cached: boolean;
	} | null;
	loaded: boolean;
	error: null | string;
}>({
	data: null,
	loaded: false,
	error: null
});

export const DiscordArtsProvider = ({
	children,
	id
}: { children: React.ReactNode; id: string; }) => {
	const [data, setData] = useState<{
		data: Partial<DiscordArts>;
		cache_expiry: number;
		cached: boolean;
	} | null>(null);
	const [loaded, setLoad] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (loaded) return;
		const fetchData = async () => {
			try {
				if (window.sessionStorage.getItem(`discord.arts.${id}`)) {
					setData(JSON.parse(window.sessionStorage.getItem(`discord.arts.${id}`) ?? '{}') ?? {});
					setLoad(true);
					return;
				}
				const response = await fetch(
					`https://discord-arts.asure.dev/v1/user/${id}`
				).catch((err) => {
					throw new Error(err);
				});
				const result = await response.json().catch((err) => {
					throw new Error(err);
				});
				setData(result);
				setLoad(true);
				window.sessionStorage.setItem(`discord.arts.${id}`, JSON.stringify(result));
			} catch (err) {
				setError('Error fetching data');
				setLoad(false);
			}
		};

		fetchData();
	}, [id, loaded]);

	return (
		<DiscordArtsData.Provider value={{ data, loaded, error }}>
			{children}
		</DiscordArtsData.Provider>
	);
};
