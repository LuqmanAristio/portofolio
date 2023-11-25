import { useEffect, useRef } from 'react';

const TypingEffect: React.FC = () => {
  const dynamicTextRef = useRef<HTMLSpanElement>(null);
  const lineEffectRef = useRef<HTMLSpanElement>(null);
  const words = ["Passionate Software and Machine Learning Engineer", "a Final Year Informatic Student at Udayana University"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);

    if (dynamicTextRef.current) {
      dynamicTextRef.current.textContent = currentChar;
    }

    if (lineEffectRef.current) {
      lineEffectRef.current.classList.add("animate-blink");
    }

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 100); // Memperlambat kecepatan ketik
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100); // Memperlambat kecepatan penghapusan
    } else {
      isDeleting = !isDeleting;

      if (lineEffectRef.current) {
        lineEffectRef.current.classList.remove("animate-blink");
      }

      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1200);
    }
  };

  useEffect(() => {
    typeEffect();
  }, []);

  return (
    <h1 className="font-semibold text-2xl text-slate-900 relative">
      {" "}
      <span ref={dynamicTextRef} className="text-slate-900 relative"></span>
      <span ref={lineEffectRef} className="ml-1 text-slate-900 relative before:content-['|'] before:w-1 before:h-5 before:absolute before:animate-blink before:-ml-1 before:transition-all before:duration-500 before:ease-in-out"></span>
    </h1>
  );
};

export default TypingEffect;
