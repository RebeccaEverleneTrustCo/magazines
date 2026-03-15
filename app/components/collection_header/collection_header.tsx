import { StaticImageData } from "next/image";
import styles from "./collection_header.module.css";
import shapes from "@/public/Shapes.svg";
import Image from "next/image";

function CollectionHeader({
  headerTitle,
  src,
}: {
  headerTitle: string;
  src: StaticImageData;
}) {
  return (
    <div className={`${styles.header} flex-column`}>
      <div className={`flex-row`}>
        <Image src={src} alt={headerTitle} className={styles.mascotImg} />
        <span>{headerTitle}</span>
        <Image src={shapes} alt="Shape" className={styles.shapeImg} />


      </div>
    </div>
  );
}

export default CollectionHeader;
