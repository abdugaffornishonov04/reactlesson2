import React, { Component } from 'react'
import logo from "../../assets/images/logo.png";
import social2 from "../../assets/images/social2.png";
import "../../styles/main.scss"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-top">
              <div className="ft-img1">
                <img src={logo} alt="" />
              </div>
              <div className="ft-img2">
                <img src={social2} alt="" />
              </div>
            </div>
            <div className="footer-bottom">
              <div className="fb-div1">
                <h3>Продукция</h3>
                <p>Ламинатные тубы</p>
                <p>Экструзионные тубы</p>
                <p>Другая упаковка</p>
              </div>
              <div className="fb-div2">
                <h3>Компания</h3>
                <p>О нас</p>
                <p>Наша команда</p>
                <p>Сертификаты</p>
              </div>
              <div className="fb-div3">
                <h3>Разделы</h3>
                <p>Контакты</p>
                <p>Новости</p>
                <p>Вакансии</p>
              </div>
              <div className="fb-div4">
                <h4>Беларусь</h4>
                <span>+375 (17) 270 53 77</span>
                <span>+375 (17) 270 53 78</span>
                <h4>Москва</h4>
                <span>+7 (495) 280 73 44</span>
                <span>+7 (495) 280 73 44</span>
              </div>
              <div className="fb-div5">
                <h4>Европа</h4>
                <span>+48 73 1111 044</span>
                <h5>Екатеринбург</h5>
                <span>+7 (343) 346 82 06</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

// end
