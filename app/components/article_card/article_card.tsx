import styles from "./article_card.module.css";
import Image, { StaticImageData } from "next/image";
import { HeartOutlined, Heart } from "../heart";
import React from "react";
import articleDetailsCards from "../articleDetailsCards/ArticleDetail";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

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
  const [isFavoriteState, setIsFavoriteState] = React.useState(isFavorite);
  const [showDetails, setShowDetails] = React.useState(false);

  const toggleFavorite = () => {
    setIsFavoriteState(!isFavoriteState);
    // dispatch({
    //   type: ActionType.ToggleFavorite,
    //   payload: { name: title, source: { id: subtitle } },
    // });
  };
 
  const toggleDetails = () => {
    setShowDetails(!showDetails);
    //navigator.clipboard.writeText("https://www.google.com");
  };
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`${styles.card} flex-column`}>
      <div className={`image ${styles.cardImg}`}>
        <Image src={src} fill={true} alt="Card Image" />
        {/* <Image src={"/public/frontier.png"} fill={true} alt="Card Image"/> */}
      </div>
      <span className={styles.title}>{title}</span>

      <span className={styles.subtitle}>{subtitle}</span>
      <div className={`flex-row ${styles.buttonWrapper}`}>
      <Link href={`/article-detail/${title}`} passHref>
             <button className={styles.viewMoreButton}>
               View more
             </button>
         </Link>
        {/* <button
          className={styles.viewMoreButton}
          onClick={() => {
            router.push(`/article-detail`);
            // router.push(`${pathname}/${title}`);
            // window.location.href = 'https://www.google.com';
          }}
        >
          View more
        </button> */}
        {!isFavoriteState && (
          <HeartOutlined
            className={styles.heartButton}
            onClick={toggleFavorite}
          />
        )}
        {isFavoriteState && (
          <Heart className={styles.heartButton} onClick={toggleFavorite} />
        )}
      </div>
    </div>
  );
}

export default ArticleCard;
