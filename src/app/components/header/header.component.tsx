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
      <h1 className={`${style.text} text-6xl`}>
        <span ref={h1Ref}>&nbsp;</span>
        <span
          ref={caretRef}
          className={[style.text, style.caret].join(" ")}
        ></span>
      </h1>
    </>
  );
  const regularContent = (
    <>
      <h1 className={`${style.text} text-6xl`}>{text}</h1>
    </>
  );
  return typeAnimation ? animatedContent : regularContent;
}
