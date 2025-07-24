import React from "react";
import styles from "../../test.module.css";
import clsx from "clsx";

const TestStyle = () => {
  return (
    <React.Fragment>
      <section>
        <p className={clsx(styles.red, styles.bg_green)}>
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
