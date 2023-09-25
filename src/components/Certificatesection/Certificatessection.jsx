import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./certificates.module.css";
import img1 from "../../assets/images/cer1.png";
import img2 from "../../assets/images/cer2.png";
import img3 from "../../assets/images/cer3.png";
import img4 from "../../assets/images/cer4.png";
import img5 from "../../assets/images/cer5.png";

export default class Certificatessection extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <section className={styles["certificate-section"]}>
        <div className="container">
          <div className={styles["certificate-wrapper"]}>
            <h2 className={styles["certificates-heading"]}>
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
            <Slider {...settings}>
              <div>
                <h3>
                  <img src={img1} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img2} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img3} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img4} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img5} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img1} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img2} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img3} alt="certificate" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={img1} alt="certificate" />
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

// export default class Certificatessection extends Component {
//   render() {
//     return (
//       <section className="certificates">
//         <div className="container">
//           <div className="certificates-wrapper">

//           </div>
//         </div>
//       </section>
//     );
//   }
// }
