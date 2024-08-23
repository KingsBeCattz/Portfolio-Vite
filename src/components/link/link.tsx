import './link.css'

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
}) => (
	<a
		className="link"
		target={target}
		href={url}
		style={{ display: 'inline-block', maxHeight: size }}
	>
		<img className="link-icon" src={src} alt={alt} style={{ width: size, height: size }} />
	</a>
);
