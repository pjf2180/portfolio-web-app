import { MutableRefObject, useEffect } from "react";

export function useTypingAnimation(
  elRef: MutableRefObject<HTMLSpanElement | null> | null,
  text: string,
  animationStart?: () => void,
  animationEnd?: () => void
) {
  useEffect(() => {
    if (elRef === null) {
      return;
    }
    animationStart?.();
    let currentCharacterIdx: number = 0;

    const getNextCharacter = () => {
      const nextStr = text.slice(0, currentCharacterIdx++);
      return { value: nextStr, done: currentCharacterIdx === text.length + 1 };
    };

    const intervalId = setInterval(() => {
      const typeResult = getNextCharacter();
      if (elRef.current) {
        elRef.current.innerText = typeResult.value;
      }
      if (typeResult.done) {
        clearInterval(intervalId);
        animationEnd?.();
      }
    }, 120);
  }, [elRef, animationStart, animationEnd, text]);
}
