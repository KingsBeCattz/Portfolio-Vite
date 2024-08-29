import './link.css';

export default ({
	url,
	src,
	alt,
	size,
	target
}: {
	url: string;
	src: string;
	alt: string;
	size: string;
	target: '_blank' | '_parent' | '_self' | '_top';
}) => {

	return (
		<a
			className="link"
			target={target}
			href={url}
			style={{ display: 'inline-block', maxHeight: size }}
			title={`${alt} (${url})`}
		>
			<img className="link-icon theme-rotate" src={src} alt={alt} style={{ width: size, height: size }} />

		</a>
	);
};
