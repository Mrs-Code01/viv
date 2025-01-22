import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/crowtherSchool.module.css'
import board from "../assets/images/2np.jpg"
import viv3 from "../assets/images/viv3.jpg"
import viv2 from "../assets/images/viv2.jpg"
import Footer from '../components/Footer'


const CrowtherSchool = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>CROWTHER PRIMARY SCHOOL</h1>
      </header>
      <div className={styles.container}>
        <p>
          Vivien Oti Poverty Relief Initiative is proud to partner with Crowther Primary School in Sapele, Delta State, Nigeria. This small but vibrant school serves underprivileged children who face numerous challenges, including food insecurity, poor healthcare, and limited access to educational resources.
        </p>

        <div>
          <img src={board} alt="" />
          <cite>Crowther Primary School, Sapele:</cite>
          <h2>Empowering the next generation</h2>
          <p>
            "Crowther Primary School, Sapele: A beacon of hope for families struggling to make ends meet. Vivien Oti Poverty Relief Initiative is honored to support this school's mission to educate and uplift its students."
          </p><br></br>
          <p>
            "Small but mighty: Crowther Primary School may be a small school, but it has big dreams for its students. We're proud to be part of their journey."
          </p>
        </div>

        <div>
          <img src={viv3} alt="" />
          <img src={viv2} alt="" />
          <p>
            "Meet the bright minds of Crowther Primary School, Sapele, Delta State, Nigeria. Despite the challenges they face, these students shine with curiosity and determination. At Vivien Oti Poverty Relief Initiative, we're committed to supporting their education and well-being."
          </p>

          <p>
            Our organization is committed to supporting Crowther Primary School's mission to provide quality education and care to its students. We believe that every child deserves access to basic necessities and opportunities to thrive.
          </p>
        </div>
        <div>
          <i>
            If you'd like to support our efforts to help Crowther Primary School and its students, please consider making a donation to Vivien Oti Poverty Relief Initiative. Every contribution counts, and your generosity will help make a tangible difference in the lives of these deserving children.
          </i>
          <Link to='/Donate'>MAKE A DONATION</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CrowtherSchool
