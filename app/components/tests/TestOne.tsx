"use client";

import React, { useState } from "react";

const TestOne = () => {
  const [test, setTest] = useState("test state");
  return (
    <React.Fragment>
      <section className="text-2xl text-green-600">{test} </section>
      <button
        type="button"
        className="btn "
        onClick={() => setTest("change test")}
      >
        Change test
      </button>
    </React.Fragment>
  );
};

export default TestOne;
