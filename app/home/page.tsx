import Link from "next/link";
import React from "react";
import TestOne from "../components/tests/TestOne";

const Home = () => {
  return (
    <React.Fragment>
      <section>Home Page</section>
      <TestOne />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat
        ex maxime sunt animi dolor id eum quasi dolores optio.
      </p>
      <Link className="btn inline-block" href={"/"}>
        /
      </Link>
    </React.Fragment>
  );
};

export default Home;
