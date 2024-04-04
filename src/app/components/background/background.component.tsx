import Image from "next/image";
import styles from "./background.module.css";

export function Background() {
  return (
    <div className={styles.imageContainer}>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/adam-kool-ndN00KmbJ1c-unsplash.jpg"
        alt="Yosemite Forest Background"
        quality={100}
        style={{ objectFit: "cover" }}
        sizes="100vw"
        fill
        priority
      />
    </div>
  );
}
