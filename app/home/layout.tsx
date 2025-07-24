import React, { ReactNode } from "react";

interface HomeLayoutPorps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutPorps> = ({ children }) => {
  return (
    <React.Fragment>
      <section className="bg-cyan-100 w-fill h-screen p-4">
        Home Layout
        {children}
      </section>
    </React.Fragment>
  );
};

export default HomeLayout;
