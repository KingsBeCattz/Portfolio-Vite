import { useEffect, useState } from 'react';

export function typingEffect(
	text: string,
	set: React.Dispatch<React.SetStateAction<string>>
) {
	const [charIndex, setCharIndex] = useState(0);
	const func = () => {
		if (charIndex < text.length) {
			const timeout = setTimeout(() => {
				set((prev) => prev + text.charAt(charIndex));
				setCharIndex(charIndex + 1);
			}, 75);

			return () => clearTimeout(timeout);
		}
	};

	useEffect(func);
	return func;
}

export function typingEffectLoop(
	texts: string[],
	delay: number,
	set: React.Dispatch<React.SetStateAction<string>>,
	deleteAnimation = true
) {
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [cache_text, setCacheText] = useState(texts[textIndex]);

	if (deleteAnimation) {
		useEffect(() => {
			let timeout: NodeJS.Timeout;

			if (!isDeleting && charIndex < cache_text.length) {
				timeout = setTimeout(() => {
					set((prev) => prev + cache_text.charAt(charIndex));
					setCharIndex(charIndex + 1);
				}, 75);
			}

			if (isDeleting && charIndex > 0) {
				timeout = setTimeout(() => {
					set((prev) => prev.slice(0, -1));
					setCharIndex(charIndex - 1);
				}, 50);
			}

			if (!isDeleting && charIndex === cache_text.length) {
				timeout = setTimeout(() => {
					setIsDeleting(true);
				}, delay);
			}

			if (isDeleting && charIndex === 0) {
				setIsDeleting(false);
				setTextIndex((prev) => (prev + 1) % texts.length);
				setCacheText(texts[textIndex]);
			}

			return () => clearTimeout(timeout);
		}, [charIndex, isDeleting, textIndex, set, texts, delay, cache_text]);
	} else {
		const func = () => {
			set("");
			if (charIndex < texts[textIndex].length) {
				const timeout = setTimeout(() => {
					set((prev) => prev + texts[textIndex].charAt(charIndex));
					setCharIndex(charIndex + 1);
				}, 75);

				return () => clearTimeout(timeout);
			}
			const timeout = setTimeout(() => {
				setCharIndex(0);
				setTextIndex((prev) => (prev + 1) % texts.length);
				set("");
			}, delay);

			return () => clearTimeout(timeout);
		};

		useEffect(func);
		return func;
	}
}
