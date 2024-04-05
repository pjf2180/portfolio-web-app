"use client";

import { useEffect, useRef } from "react";
import style from "./header.module.scss";
interface HeaderProps {
  text: string;
  typeAnimation?: boolean;
}
export function Header({ text, typeAnimation }: HeaderProps) {
  const h1Ref = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typeAnimation) {
      if (h1Ref.current) {
        h1Ref.current.innerText = text;
      }
      return;
    }
    const type = useType(text);
    caretRef.current!.innerText = "|";
    const intervalId = setInterval(() => {
      const typeResult = type();
      h1Ref.current!.innerText = typeResult.value;
      if (typeResult.done) {
        clearInterval(intervalId);
        caretRef.current!.innerText = "";
        caretRef.current?.classList.add(style.typingAnimation);
      }
    }, 120);
  }, []);

  return (
    <span>
      <h1 className={style.text}>
        <span ref={h1Ref}></span>
        <span
          ref={caretRef}
          className={[style.text, style.caret].join(" ")}
        ></span>
      </h1>
    </span>
  );
}

function useType(text: string) {
  let currentCharacterIdx: number = 0;
  return () => {
    const nextStr = text.slice(0, currentCharacterIdx++);
    return { value: nextStr, done: currentCharacterIdx === text.length + 1 };
  };
}
