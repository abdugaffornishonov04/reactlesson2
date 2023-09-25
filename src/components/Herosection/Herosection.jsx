import React, { Component } from "react";
import social from "../../assets/images/social.png";
import Slider from "react-slick";
import "../../styles/main.scss";

export default class Herosection extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      // everytging is ok

      <section className="hero-section">
        <div className="container">
          <div className="hero-wrapper">
            <div className="container">
              <Slider {...settings}>
                <div className="hero-wrapper">
                  <div className="hero-main">
                    <p className="hero-subtext">LEANGROUP - тубы и этикетки</p>
                    <h1 className="hero-title">Ламинатные тубы</h1>
                    <p className="hero-text">
                      Используются для производства зубных паст. Широко
                      применяются в сегменте косметики, пищевой индустрии,
                      парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                    </p>
                    <div className="hero-btn">Каталог</div>
                  </div>
                  <div className="hero-socialapps">
                    <img src={social} alt="" />
                  </div>
                </div>
                <div className="hero-wrapper">
                  <div className="hero-main">
                    <p className="hero-subtext">LEANGROUP - тубы и этикетки</p>
                    <h1 className="hero-title">Ламинатные тубы</h1>
                    <p className="hero-text">
                      Используются для производства зубных паст. Широко
                      применяются в сегменте косметики, пищевой индустрии,
                      парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                    </p>
                    <div className="hero-btn">Каталог</div>
                  </div>
                  <div className="hero-socialapps">
                    <img src={social} alt="" />
                  </div>
                </div>
                <div className="hero-wrapper">
                  <div className="hero-main">
                    <p className="hero-subtext">LEANGROUP - тубы и этикетки</p>
                    <h1 className="hero-title">Ламинатные тубы</h1>
                    <p className="hero-text">
                      Используются для производства зубных паст. Широко
                      применяются в сегменте косметики, пищевой индустрии,
                      парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                    </p>
                    <div className="hero-btn">Каталог</div>
                  </div>
                  <div className="hero-socialapps">
                    <img src={social} alt="" />
                  </div>
                </div>
                <div className="hero-wrapper">
                  <div className="hero-main">
                    <p className="hero-subtext">LEANGROUP - тубы и этикетки</p>
                    <h1 className="hero-title">Ламинатные тубы</h1>
                    <p className="hero-text">
                      Используются для производства зубных паст. Широко
                      применяются в сегменте косметики, пищевой индустрии,
                      парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                    </p>
                    <div className="hero-btn">Каталог</div>
                  </div>
                  <div className="hero-socialapps">
                    <img src={social} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
