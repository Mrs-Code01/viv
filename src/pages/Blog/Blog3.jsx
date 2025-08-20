import React from "react";
import blog1Style from "../../css/blog3.module.css";
import v33 from "/images/v33.jpg";
import Share from "../../components/Share";
import LeaveAReply from "../../components/LeaveAReply";
import CeoMessage from "../../components/CeoMessage";
import Footer from "../../components/Footer";

const Blog3 = () => {
  return (
    <>
      <div className={blog1Style.blog1ContentContainer}>
        <header className={blog1Style.header}>
          <h1>
            Outreach Event: Participation in the 2025 World Day Against
            Trafficking in Persons
          </h1>
          <h5>By Vivien Oti</h5>
          <div>
            <span>May 16, 2025</span>
            <span>&bull;</span>
            <span>3 min read</span>
          </div>
        </header>

        <p>
          Vivien Oti Poverty Relief Initiative proudly participated in the 2025
          World Day Against Trafficking in Persons, organized by NAPTIP Benin
          Zonal Command in Edo State, Nigeria. The event's theme, "Human
          Trafficking is Organized Crime: End the Exploitation," resonated
          deeply with our mission to empower and uplift vulnerable communities.
        </p>

        <div>
          <div>
            <img src={v33} alt="" />
          </div>
          <p>
            Our goal is to provide poverty relief in early childhood education,
            and this event was a significant step towards achieving that goal.
            The pupils learned about the importance of understanding poverty and
            its effects on their lives.
          </p>
        </div>

        <div>
          <p>
            Together, we can work towards a future where every individual is
            free from exploitation and has the opportunity to thrive. At Vivien
            Oti Poverty Relief Initiative, we're committed to making a
            difference
          </p>
          <br />
          <a href="https://www.youtube.com/watch?v=MMN5yTmvIuE">
            Checkout the video below for more details
          </a>
        </div>
      </div>
      <Share />
      <CeoMessage />
      <LeaveAReply />
      <Footer />
    </>
  );
};

export default Blog3;
