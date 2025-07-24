import React from "react";
import TestClientDataFetch from "../components/tests/TestClientDataFetch";
import TestDataFetch from "../components/tests/TestDataFetch";
import TestStyle from "../components/tests/TestStyle";
import TestShardcn from "../components/tests/TestShardcn";

const Tests = async () => {
  return (
    <React.Fragment>
      <section>
        {/* <TestDataFetch /> */}
        {/* <TestClientDataFetch /> */}
        <TestStyle />
        <TestShardcn />
      </section>
    </React.Fragment>
  );
};

export default Tests;
