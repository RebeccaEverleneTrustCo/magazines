import styles from "./input.module.css";

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      className={styles.searchInput}
      placeholder={placeholder}
    />
  );
}

export default Input;
