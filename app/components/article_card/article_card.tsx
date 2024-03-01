import styles from "./article_card.module.css";
import Image, { StaticImageData } from "next/image";
import { HeartOutlined, Heart } from "../heart";

const sampleUrl =
  "https://images.unsplash.com/photo-1633977264259-b3517c187e3d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function ArticleCard({
  src,
  title,
  subtitle,
  isFavorite,
}: {
  src: StaticImageData;
  title: string;
  subtitle: string;
  isFavorite: boolean;
}) {
  return (
    <div className={`${styles.card} flex-column`}>
      <div className={`image ${styles.cardImg}`}>
        <Image src={src} fill={true} alt="Card Image" />
        {/* <Image src={"/public/frontier.png"} fill={true} alt="Card Image"/> */}

      </div>
      <span className={styles.title}>{title}</span>

      <span className={styles.subtitle}>{subtitle}</span>

      <div className={`flex-row ${styles.buttonWrapper}`}>
        <button className={`button ${styles.viewMoreButton}`}>
          {" "}
          View More
        </button>

        <HeartOutlined className={styles.heartButton} />
      </div>
    </div>
  );
}

export default ArticleCard;
