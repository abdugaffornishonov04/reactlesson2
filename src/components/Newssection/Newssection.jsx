import React, { Component } from "react";
import newsimg3 from "../../assets/images/newsimg3.png";
import newsimg2 from "../../assets/images/newsimg2.png";
import newsimg1 from "../../assets/images/newsimg1.png";

export default class Newssection extends Component {
  render() {
    return (
      <section className="news-section">
        <div className="container">
          <div className="news-wrapper">
            <h2 className="news-title">Новости</h2>
            <div className="news-cards">
              <div className="news-card">
                <img src={newsimg3} alt="" />
                <span>28.01.2022</span>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
              <div className="news-card">
                <img src={newsimg2} alt="" />
                <span>28.01.2022</span>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
              <div className="news-card">
                <img src={newsimg1} alt="" />
                <span>28.01.2022</span>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
            </div>
            <a href="#newssection" className="news-section-link">
              Все новости
            </a>
          </div>
        </div>
      </section>
    );
  }
}


