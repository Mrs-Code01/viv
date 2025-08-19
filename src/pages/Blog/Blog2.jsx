import React from "react";
import blog1Style from "../../css/blog2.module.css";
import v1 from "/images/v6.jpg";
import v2 from "/images/v7.jpg";
import v3 from "/images/v12.jpg";
import v4 from "/images/v14.jpg";
import v5 from "/images/v15.jpg";
import v6 from "/images/v16.jpg";
import v7 from "/images/v24.jpg";
import Share from "../../components/Share";
import LeaveAReply from "../../components/LeaveAReply";
import CeoMessage from "../../components/CeoMessage";
import Footer from "../../components/Footer";

const Blog2 = () => {
  return (
    <>
      <div className={blog1Style.blog1ContentContainer}>
        <header className={blog1Style.header}>
          <h1>Outreach Event: Poverty Relief in Early Childhood Education</h1>
          <h5>By Vivien Oti</h5>
          <div>
            <span>May 16, 2025</span>
            <span>&bull;</span>
            <span>3 min read</span>
          </div>
          <h5>
            Location : Crowther Primary School, Sapele, Delta State, Nigeria
          </h5>
        </header>

        <p>
          We are thrilled to share the success of our recent outreach event at
          Crowther Primary School, Sapele, Delta State, Nigeria! As the CEO of
          Vivien Oti Poverty Relief Initiative, I had the honor of teaching
          pupils about the meaning of poverty and its causes.
        </p>

        <div>
          <div>
            <img src={v1} alt="" />
            <img src={v3} alt="" />
          </div>
          <p>
            Our goal is to provide poverty relief in early childhood education,
            and this event was a significant step towards achieving that goal.
            The pupils learned about the importance of understanding poverty and
            its effects on their lives.
          </p>
        </div>

        <div>
          <div>
            <img src={v5} alt="" />
            <img src={v6} alt="" />
          </div>
          <p>
            To make the event even more special, we shared gifts and educational
            resources with the pupils! <br />
            We also displayed pictures of the educational resources on the
            table, which officially shared to the pupils. We believe that these
            resources will help inspire and motivate them to learn more.
          </p>
          <br /> <br />
          <p>
            We are grateful to the headmaster, teachers, and pupils of Crowther
            Primary School for their warm welcome and participation. Your
            support makes initiatives like this possible
          </p>
        </div>
        <div>
          <img src={v2} alt="" />
          <img src={v4} alt="" />
          <img src={v7} alt="" />
        </div>
      </div>
      <Share />
      <CeoMessage />
      <LeaveAReply />
      <Footer />
    </>
  );
};

export default Blog2;
