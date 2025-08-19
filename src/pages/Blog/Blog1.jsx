import React from "react";
import blog1Style from "../../css/blog1.module.css";
import img25 from "../../assets/images/viv10.jpg";
import img24 from "../../assets/images/24.jpg";
import Share from "../../components/Share";
import LeaveAReply from "../../components/LeaveAReply";
import CeoMessage from "../../components/CeoMessage";
import Footer from "../../components/Footer";

const Blog1 = () => {
  return (
    <>
      <div className={blog1Style.blog1ContentContainer}>
        <header className={blog1Style.header}>
          <h1>NGO vision: Our vision for a brighter vision</h1>
          <h5>By Vivien Oti</h5>
          <div>
            <span>Jan 19, 2025</span>
            <span>&bull;</span>
            <span>3 min read</span>
          </div>
        </header>

        <p>
          The Vivien Oti Poverty Relief Initiative is committed to creating a
          world where everyone has access to the resources they need to thrive.
          As we embark on this journey, we're excited to share our vision with
          you.
        </p>

        <div>
          <img src={img25} alt="" />
          <h2>Empowering Communities</h2>
          <p>
            Our goal is to empower vulnerable individuals and families,
            providing them with the tools and support they need to break the
            cycle of poverty. We believe in the potential of every person and
            community, and we're dedicated to helping them realize their full
            potential.
          </p>
        </div>

        <div>
          <img src={img24} alt="" />
          <h2>Collaboration And Partnership</h2>
          <p>
            We recognize that poverty is a complex issue that requires a
            collaborative approach. That's why we're committed to partnering
            with local organizations, communities, and stakeholders to develop
            effective solutions.
          </p>
        </div>
      </div>
      <Share />
      <CeoMessage />
      <LeaveAReply />
      <Footer />
    </>
  );
};

export default Blog1;
