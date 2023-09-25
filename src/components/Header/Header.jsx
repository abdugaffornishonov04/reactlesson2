import React, { Component } from "react";
import "../../styles/main.scss";
import logo from "../../assets/images/logo.png";


export default class Header extends Component {
  showDark = () => {
    document.body.classList.add("body-is-dark")
    document.querySelector("header").classList.add("body-is-dark")
  };

  showDarkRemove = () => {
     document.body.classList.remove("body-is-dark");
    document.querySelector("header").classList.remove("body-is-dark");

  };

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <a href="index.html" className="header-logo">
              <img src={logo} alt="" />
            </a>
            <nav className="navbar">
              <button className="navbar-show-btn">
                See Navbar
              </button>
              <ul className="navbar-list">
                <li>
                  <a className="navbar-link" href="#Products">
                    Продукция
                  </a>
                  <div className="navbar-link-dropwdown">
                    <ul>
                      <p>Ламинатные тубы</p>
                      <p>Экструзионные тубы</p>
                      <p>Другая упаковка</p>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="navbar-link" href="#Certificate">
                    Сертификаты
                  </a>
                  <div className="navbar-link-dropwdown">
                    <ul>
                      <p>Ламинатные тубы</p>
                      <p>Экструзионные тубы</p>
                      <p>Другая упаковка</p>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="navbar-link" href="#Team">
                    Наша команда
                  </a>
                  <div className="navbar-link-dropwdown">
                    <ul>
                      <p>Ламинатные тубы</p>
                      <p>Экструзионные тубы</p>
                      <p>Другая упаковка</p>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="navbar-link" href="#About">
                    О нас
                  </a>
                  <div className="navbar-link-dropwdown">
                    <ul>
                      <p>Ламинатные тубы</p>
                      <p>Экструзионные тубы</p>
                      <p>Другая упаковка</p>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="navbar-link" href="#News">
                    Новости
                  </a>
                  <div className="navbar-link-dropwdown">
                    <ul>
                      <p>Ламинатные тубы</p>
                      <p>Экструзионные тубы</p>
                      <p>Другая упаковка</p>
                    </ul>
                  </div>
                </li>
               
                <li>
                  <a className="navbar-link" href="#vacancy">
                    Вакансии
                  </a>
                  <div className="navbar-link-dropwdown">
                    <ul>
                      <p>Ламинатные тубы</p>
                      <p>Экструзионные тубы</p>
                      <p>Другая упаковка</p>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="navbar-link" href="#contact">
                    Контакты
                  </a>
                  <div className="navbar-link-dropwdown">
                    <ul>
                      <p>Ламинатные тубы</p>
                      <p>Экструзионные тубы</p>
                      <p>Другая упаковка</p>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="navbar-dark-light">
                <div onClick={this.showDark} className="btn-dark ">Dark</div>
                <div onClick={this.showDarkRemove} className="btn-light dark-light-change">Light</div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

// looks goof 1 2 3 4 5 
