import React from "react";
import styles from "../../test.module.css";

const TestStyle = () => {
  return (
    <React.Fragment>
      <section>
        <p className={styles.red}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          quibusdam earum a.
        </p>
        <button className={styles.btn} type="button">
          Click me
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestStyle;
