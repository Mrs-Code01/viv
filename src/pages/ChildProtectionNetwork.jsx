import React from "react";
import styles from "../css/cpn.module.css";
import Footer from "../components/Footer";

const ChildProtectionNetwork = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>CHILD PROTECTION NETWORK</h1>
      </header>
      <div className={styles.content}>
        <p>
          At Vivien Oti Poverty Relief Initiative, we prioritize the safety and
          well-being of children. We collaborate with Child Protection Networks
          (CPN) to ensure our programs and services provide a secure and
          nurturing environment for all children
        </p>
        <img src="/images/v32.jpg" alt="" />
      </div>
      <Footer />
    </>
  );
};

export default ChildProtectionNetwork;
