// "use client";
import styles from "./alpha_order_chip.module.css";
function AlphaOrderChip({
  text,
  selected,
  onClick,
}: {
  text: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${styles.card} flex-row ${
        selected ? styles.yellowGreenGradient : styles.whiteBg
      }`}
      onClick={onClick}
    >
      <span
        className={`${styles.alphabet} ${
          selected ? styles.fwSemiBold : "fw-regular"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default AlphaOrderChip;
