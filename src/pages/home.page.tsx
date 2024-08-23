import { useState, useEffect } from 'react';
import './home.page.css';

function HomePage() {
	const texts = ["Frontend Developer", "Backend Developer", "TS Developer", "JS Developer"];
  const typingSpeed = 75;
  const delayBetweenTexts = 5000;

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setCurrentText("");
      }, delayBetweenTexts);

      return () => clearTimeout(timeout);
  }, [charIndex, textIndex]);

	return (
		<>
			<h1 className="typing">
				<span>{currentText}</span>
			</h1>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, sapiente. Consequuntur distinctio porro sit repellendus a. Laborum inventore tempora at, sit, quaerat repellendus recusandae a doloremque odit earum repudiandae accusamus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur voluptatem aperiam iusto obcaecati cum? Eligendi nisi animi reiciendis hic architecto aperiam sint nihil, minima, voluptates et ratione aspernatur commodi cum.
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, sapiente. Consequuntur distinctio porro sit repellendus a. Laborum inventore tempora at, sit, quaerat repellendus recusandae a doloremque odit earum repudiandae accusamus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur voluptatem aperiam iusto obcaecati cum? Eligendi nisi animi reiciendis hic architecto aperiam sint nihil, minima, voluptates et ratione aspernatur commodi cum.
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, sapiente. Consequuntur distinctio porro sit repellendus a. Laborum inventore tempora at, sit, quaerat repellendus recusandae a doloremque odit earum repudiandae accusamus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur voluptatem aperiam iusto obcaecati cum? Eligendi nisi animi reiciendis hic architecto aperiam sint nihil, minima, voluptates et ratione aspernatur commodi cum.
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, sapiente. Consequuntur distinctio porro sit repellendus a. Laborum inventore tempora at, sit, quaerat repellendus recusandae a doloremque odit earum repudiandae accusamus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur voluptatem aperiam iusto obcaecati cum? Eligendi nisi animi reiciendis hic architecto aperiam sint nihil, minima, voluptates et ratione aspernatur commodi cum.
		</>
	);
}

export default HomePage;
