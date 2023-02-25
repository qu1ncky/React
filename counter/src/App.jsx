import React from "react";
import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickMinus = () => {
    setCount(count - 1);
  };

  const onClickPlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.infoBlock}>
            <p className={styles.text}>Счетчик:</p>
            <p className={styles.counter}>{count}</p>
          </div>

          <div className={styles.buttonBlock}>
            <div onClick={onClickMinus} className={styles.minusButton}>
              <button className={styles.minusButton}>- Минус</button>
            </div>
            <div onClick={onClickPlus} className={styles.plusButton}>
              <button className={styles.plusButton}>Плюс +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
