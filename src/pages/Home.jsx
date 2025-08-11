import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import viv1 from "../assets/images/viv1.jpg";
import viv2 from "../assets/images/viv2.jpg";
import viv3 from "../assets/images/viv6.jpg";
import homeStyle from "../css/home.module.css";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  const images = [viv1, viv2, viv3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  const bgStyle = {
    backgroundImage: `linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    transition: "background-image 3s ease-in-out"
  };

  return (
    <>
      <div className="bg-image" style={bgStyle}>
        <div className={homeStyle.headerContent}>
          <p>VIVIEN OTI POVERTY RELIEF INITIATIVE</p>
          <h1>BREAKING THE CYCLE OF POVERTY</h1>
          <div className={homeStyle.headerContentLinks}>
            <Link to="/About/AboutUs">Learn More</Link>
            <Link to="/Donate">Donate</Link>
          </div>
        </div>
      </div>
      <div className={homeStyle.visionStatementContainer}>
        <img src={viv1} alt="" />
        <div className={homeStyle.visionStatementText}>
          <h2>WELCOME TO VIVIEN OTI POVERTY RELIEF INITIATIVE</h2>
          <div className="line"></div>
          <p>
            Empowering communities to break the cycle of Poverty. The Vivien Oti
            Poverty Relief Initiative envisions a world where every individual
            has access to resources, opportunities, and support to thrive with
            dignity and hope.
          </p>
        </div>
      </div>
      <div className={homeStyle.highlights}>
        <h2>LATEST NEWS AND HIGHLIGHTS</h2>
        <div className={homeStyle.highlightsFlex}>
          <div>
            <img src="/images/v1.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://www.cnn.com/2025/06/22/africa/former-usaid-staff-matching-donors-intl">
                Seven million Nigerians to suffer acute hunger in three months
              </a>
            </div>
          </div>
          {/* END OF 1 */}
          <div>
            <img src="/images/v28.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://nigeria.un.org/en">
                Looting of food grains continues in Nigeria as almost half
                population
              </a>
            </div>
          </div>
          {/* END OF 2 */}
          <div>
            <img src="/images/v3.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://www.aljazeera.com/tag/poverty-and-development/">
                Food insecurity: Nigeria account for two thirds of world's
                hungriest
              </a>
            </div>
          </div>
          {/* END OF 3 */}
          <div>
            <img src="/images/v17.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://www.bbc.co.uk/news/articles/ckg33r1xgymo">
                1 million Nigerians will go hungry in december
              </a>
            </div>
          </div>
          {/* END OF 4 */}
          <div>
            <img src="/images/v18.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://punchng.com/tags/food-insecurity/">
                Nigeria tagged Hunger Hotspot as government rally to end
                insecurity
              </a>
            </div>
          </div>
          {/* END OF 5 */}
          <div>
            <img src="/images/v19.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://www.theguardian.com/global-development/global-development+society/poverty">
                Plight of Nigeria children getting worse
              </a>
            </div>
          </div>
          {/* END OF 6 */}
          <div>
            <img src="/images/v20.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://www.theguardian.com/global-development/global-development+society/poverty">
                "Children are hungry": Thousands protest soaring cost
              </a>
            </div>
          </div>
          {/* END OF 7 */}
          <div>
            <img src="/images/v21.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://www.vanguardngr.com/2025/06/hunger-poverty-corruption-and-underdevelopment/">
                Crying for hungry Nigeria
              </a>
            </div>
          </div>
          {/* END OF 8 */}
          <div>
            <img src="/images/v22.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://www.thisdaylive.com/2025/06/28/wbank-extreme-poverty-rising-fast-in-nigeria-38-others-hit-by-conflict-instability/">
                Hungry Nigeria kids
              </a>
            </div>
          </div>
          {/* END OF 9 */}
          <div>
            <img src="/images/v4.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="https://dailytrust.com/calls-for-action-grow-as-malnutrition-worsens-in-n-east-n-west/">
                Hungry Nigeria boy
              </a>
            </div>
          </div>
          {/* END OF 10 */}
          <div>
            <img src="/images/v23.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">
                Nigeria and the mists of malnutrition: The Nation Newspaper
              </a>
            </div>
          </div>
          {/* END OF 11 */}
          <div>
            <img src="/images/v8.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">2.5m Nigerian children suffering acute malnutrition</a>
            </div>
          </div>
          {/* END OF 12 */}
          <div>
            <img src="/images/v13.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">Nigerian famine</a>
            </div>
          </div>
          {/* END OF 13 */}
          <div>
            <img src="/images/v9.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">Kano state looters</a>
            </div>
          </div>
          {/* END OF 14 */}
          <div>
            <img src="/images/v25.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">
                Northern Nigerian, one of the highest alert hunger hotspot
              </a>
            </div>
          </div>
          {/* END OF 15 */}
          <div>
            <img src="/images/v10.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">In Nigeria, looting in several cities</a>
            </div>
          </div>
          {/* END OF 16 */}
          <div>
            <img src="/images/v31.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">Hungry Nigeria</a>
            </div>
          </div>
          {/* END OF 17 */}
          <div>
            <img src="/images/v26.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">
                Nigeria families and others forced to skip meals, go hungry
              </a>
            </div>
          </div>
          {/* END OF 18 */}
          <div>
            <img src="/images/v29.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">NCC park looting in Kano state, Nigeria</a>
            </div>
          </div>
          {/* END OF 19 */}
          <div>
            <img src="/images/v11.jpg" alt="" />
            <div>
              <span>NEWS</span>
              <a href="">
                Seven million Nigerians to suffer acute hunger in three months
              </a>
            </div>
          </div>
          {/* END OF 20 */}
        </div>
      </div>
      <hr className={homeStyle.hr} />
      <div className={homeStyle.goals}>
        <h2>Sustainable Goals</h2>
        <div className={homeStyle.line}></div>
        <a href="">
          At Vivien Oti Poverty Relief Initiative, we are committed to reducing
          poverty and improving living standards for disadvantaged communities.
        </a>
        <Link to="/Goals">View</Link>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
