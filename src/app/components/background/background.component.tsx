import Image from "next/image";
import styles from "./background.module.css";

export function Background() {
  return (
    <div className={styles.imageContainer}>
      <Image
        className="relative"
        src="/adam-kool-ndN00KmbJ1c-unsplash.jpg"
        alt="Yosemite National Park Forest Background"
        quality={100}
        style={{ objectFit: "cover" }}
        fill
        priority
      />
    </div>
  );
}
