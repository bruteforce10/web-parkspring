import React from "react";
import Footer from "../components/Footer";

const MediaLayout = ({ children }) => {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
};

export default MediaLayout;
