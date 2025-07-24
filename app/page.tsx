import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <section className="text-red-600">Index Page</section>
      <Link href={"/home"} type="button" className="btn inline-block">
        Go To Home
      </Link>
    </React.Fragment>
  );
};

export default Home;
