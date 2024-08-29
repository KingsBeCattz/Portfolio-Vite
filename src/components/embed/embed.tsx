import type { ReactNode } from 'react';
import './embed.css';

export default ({
	title,
	children
}: { title: string; children: ReactNode }) => {
	return (
		<div className="embed">
			<span className="title">{title}</span>
			<div className="content">{children}</div>
		</div>
	);
};
