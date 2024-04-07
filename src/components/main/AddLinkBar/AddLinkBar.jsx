import styles from "./AddLinkBar.module.css";

function AddLinkBar() {
  return (
    <div className={styles.addLinkBar}>
      <div className={styles.container}>
        <img src="images/link.svg" className={styles.image}></img>
        <input className={styles.input} placeholder="링크를 추가해보세요." />
      </div>
      <button className={styles.button}>추가하기</button>
    </div>
  );
}

export default AddLinkBar;
