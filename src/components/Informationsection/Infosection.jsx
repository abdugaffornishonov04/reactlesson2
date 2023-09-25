import React, { Component } from 'react'
import phoneicon from "../../assets/images/phoneicon.png"
import personicon from "../../assets/images/personicon.png"

export default class Infosection extends Component {
  render() {
    return (
      <section className="information-section">
        <div className="container">
          <div className="information-wrapper">
            <h2 className="info-heading">
              Получить подробную <span>информацию</span>
            </h2>
            <p className="info-text">
              Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
              время
            </p>
            <form action="#">
              <div className="form-wrapper">
                <div className="first-div-form">
                  <input type="name" placeholder="Ваше имя" />
                  <img src={personicon} alt="" />
                  {/* <p>Ваше имя</p> */}
                </div>
                <div className="second-div-form">
                  <input type="tel" placeholder="+375 (29) 0000000" />
                  <img src={phoneicon} alt="" />
                </div>
              </div>
              <div className="third-div-form">
                <input type="text" placeholder="Комментарий" />
              </div>
            </form>
            <button className="information-btn">Получить информацию</button>
          </div>
        </div>
      </section>
      
    );
  }
}

// end
