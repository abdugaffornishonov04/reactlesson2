import React, { Component } from "react";
import playbnt from "../../assets/images/playbtnabout.png";
import "../../styles/main.scss"

export default class Aboutsection extends Component {
  render() {
    return (
      <section className="about-section">
        <div className="container">
          <div className="about-wrapper">
            <h2 className="about-title">
              О компании <span>LEANGROUP</span>
            </h2>
            <div className="about-main">
              <div className="about-image-div">
                <img src={playbnt} alt="play button" />
              </div>
              <p className="about-text">
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. Имея две технологии – для
                производства ламинатных и экструзионных туб, мы предлагаем вам
                широкий спектр возможностей. Большим преимуществом является
                собственный печатный цех в ламинате и in-line печать в экструзии
                с возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции. С января 2018
                года компания стала членом Европейской Ассоциации производителей
                туб (ETMA), что подтверждает сильную позицию бренда и на рынке
                Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}