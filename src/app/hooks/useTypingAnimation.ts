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
    const type = useType(text);
    if (animationStart) {
      animationStart();
    }
    const intervalId = setInterval(() => {
      const typeResult = type();
      if(elRef.current){
        elRef.current.innerText = typeResult.value;
      }
      if (typeResult.done) {
        clearInterval(intervalId);
        if (animationEnd) {
          animationEnd();
        }
      }
    }, 120);
  }, []);
}

function useType(text: string) {
  let currentCharacterIdx: number = 0;
  return () => {
    const nextStr = text.slice(0, currentCharacterIdx++);
    return { value: nextStr, done: currentCharacterIdx === text.length + 1 };
  };
}
