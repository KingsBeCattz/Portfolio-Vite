import './avatar.css';

import defaultAvatar from '../../assets/default.avatar.svg';

export default function ({
	size,
	radius,
	border,
	src,
	alt
}: {
	size: number | string;
	radius: number;
	border?: {
		color: string;
		weight: number;
	};
	src: string | null;
	alt: string;
}) {
	return (
		<div
			className="avatar"
			style={
				border
					? {
						width: size,
						height: size,
						borderRadius: `${radius}%`,
						border: `${border.weight}px solid ${border.color}`,
						padding: border.weight
					}
					: { width: size, height: size, borderRadius: `${radius}%` }
			}
		>
			<img
				src={src ?? defaultAvatar}
				alt={alt}
				style={
					border
						? {
							width: "100%",
							height: "100%",
							borderRadius: `${radius}%`
						}
						: { width: size, height: size, borderRadius: `${radius}%` }
				}
			/>
		</div>
	);
}
