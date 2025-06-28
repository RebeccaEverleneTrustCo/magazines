import styles from "../components/side_nav/side_nav.module.css";

function CheckBox({
    label,
    group,
    checked,
    onClick,
  }: {
    label: string;
    group: string;
    checked: boolean;
    onClick: () => void;
  }) {
    return (
      <div className={`flex-row ${styles.checkboxWrapper}`} onClick={onClick}>
        <input
          type="checkbox"
          name={group}
          value={label}
          className={styles.checkbox}
          checked={checked}
        />
        <span
          className={`${styles.checkboxLabel} ${
            checked ? styles.tcBlack : styles.tcGray
          }`}
        >
          {label}
        </span>
      </div>
    );
  }

  export default CheckBox;