"use client";

import { useRef } from "react";
import style from "./header.module.scss";
import { useTypingAnimation } from "@/app/hooks/useTypingAnimation";
interface HeaderProps {
  text: string;
  typeAnimation?: boolean;
}
export function Header({ text, typeAnimation }: HeaderProps) {
  const h1Ref = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  useTypingAnimation(
    typeAnimation ? h1Ref : null,
    text,
    () => {
      if (caretRef.current) {
        caretRef.current.innerText = "|";
      }
    },
    () => {
      if (caretRef.current) {
        caretRef.current.innerText = "";
      }
      caretRef.current?.classList.add(style.typingAnimation);
    }
  );
  const animatedContent = (
    <>
      <span ref={h1Ref}>&nbsp;</span>
      <span
        ref={caretRef}
        className={[style.text, " text-4xl sm:text-5xl md:text-6xl"].join(" ")}
      ></span>
    </>
  );
  const regularContent = <>{text}</>;
  return (
    <h1 className={`${style.text} text-4xl sm:text-5xl md:text-6xl`}>
      {typeAnimation ? animatedContent : regularContent}
    </h1>
  );
  return;
}
