import React from "react";
import TestClientDataFetch from "../components/tests/TestClientDataFetch";
// import TestDataFetch from "../components/tests/TestDataFetch";

const Tests = async () => {
  return (
    <React.Fragment>
      <section>
        {/* <TestDataFetch /> */}
        <TestClientDataFetch />
      </section>
    </React.Fragment>
  );
};

export default Tests;
