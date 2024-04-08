import style from "./card-gallery.module.scss";

interface CardGalleryProps {
  children: React.ReactNode;
}
export function CardGallery({children}: CardGalleryProps) {
  return <div className={style.main}>{children}</div>;
}
