import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../css/news1.module.css'
import viv9 from "../../assets/images/viv9.jpg"
import n3 from "../../assets/images/3.jpg"
import Share from '../../components/Share'
import LeaveAReply from '../../components/LeaveAReply'
import Footer from '../../components/Footer'

const News1 = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Medical Condition: Urgent Medical Assistance Needed for Mrs. Ucheuchi Ginawa</h1>
          <h5>By Vivien Oti</h5>
          <div><span>Jan 19, 2025</span><span>&bull;</span><span>5 min read</span></div><br></br>
          <p>
            Vivien Oti Poverty Relief Initiative is committed to supporting individuals in need, especially those facing health challenges. We recently met Mrs. Ucheuchi Ginawa, a courageous woman who shared her heart-wrenching story with us.
          </p>
        </header>
        <div>
          <img src={viv9} alt="" />
          <h2>A Devastating Medical Condition</h2>
          <p>
            Mrs. Ginawa underwent a medical surgery during the delivery of her twins, who are now 12 years old. Tragically, her stomach organs protruded from her stomach surface, a condition attributed to "ungrowth" by her doctors. This debilitating condition has left her in constant pain and discomfort.
          </p>
        </div>
        <div>
          <h3>Current Medical Needs</h3>
          <p>
            Although the original medical bills and treatment records are no longer available due to the passage of time, Mrs. Ginawa requires urgent medical attention to alleviate her suffering. Our organization has verified her current medical condition through a review by a medical professional.
          </p>
        </div>
        <div>
          <h3>Estimated Treatment Costs</h3>
          <p>
            The estimated cost of Mrs. Ginawa's treatment is approximately 20 million Naira. We are appealing to your generosity to help cover these expenses.
          </p>
        </div>
        <div>
          <h3>How You Can Help</h3>
          <p>
            Your donation can make a significant difference in Mrs. Ginawa's life. Please consider supporting her medical treatment by:
          </p>
          <ul>
            <li>Donating through our website</li>
            <li>Sharing her story with your network</li>
            <li>Offering words of encouragement and support</li>
          </ul>
        </div>
        <div>
          <img src={n3} alt="" />
          <h3>Together, We Can Make a Difference</h3>
          <p>
            At Vivien Oti Poverty Relief Initiative, we believe that everyone deserves access to quality medical care. Your kindness and generosity can help Mrs. Ginawa receive the treatment she desperately needs.
          </p><br></br>
          <p>
            Please join us in supporting Mrs. Ginawa during this challenging time. Your contribution can bring hope and healing to her and her family
          </p>
          <Link to='/Donate'>MAKE A DONATION</Link>
        </div>
      </div>
      <Share />
      <LeaveAReply />
      <Footer />
    </>
  )
}

export default News1
