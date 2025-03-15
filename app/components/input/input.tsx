import styles from "./input.module.css";

interface Input {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className={styles.searchInput}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
