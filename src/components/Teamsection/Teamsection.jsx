import React, { Component } from "react";
import teamcardimg5 from "../../assets/images/teamavatar5.png";
import teamcardimg4 from "../../assets/images/teamavatar4.png";
import teamcardimg3 from "../../assets/images/teamavatar3.png";
import teamcardimg2 from "../../assets/images/teamavatar2.png";
import teamcardimg1 from "../../assets/images/teamavatar1.png";

export default class Teamsection extends Component {
  render() {
    return (
      <section className="Teamsection">
        <div className="container">
          <div className="team-main-wrapper">
            <h2 className="team-section-title">
              Наша <span>команда</span>
            </h2>
            <div className="team-wrapper">
              <div className="team-card">
                <div className="team-card-image">
                  <img src={teamcardimg5} alt="" />
                </div>
                <h4 className="team-names">Войнич Дарья</h4>
                <p className="team-card-profession">
                  Заместитель директора по продажам
                </p>
                <p className="team-card-info">+375 (17) 270-53-77 (317)</p>
              </div>
              <div className="team-card">
                <div className="team-card-image">
                  <img src={teamcardimg4} alt="" />
                </div>
                <h4 className="team-names">Мисько Екатерина</h4>
                <p className="team-card-profession">
                  Начальник отдела сопровождения
                </p>
                <p className="team-card-info">
                  +375 (17) 270-53-77 (115) +375 29 112-73-48
                  k.melnichenko@leangroup.by
                </p>
              </div>
              <div className="team-card">
                <div className="team-card-image">
                  <img src={teamcardimg3} alt="" />
                </div>
                <h4 className="team-names">Дмитроченко Дмитрий</h4>
                <p className="team-card-profession">
                  Начальник отдела допечатной подготовки
                </p>
                <p className="team-card-info">
                  +375 (17) 270-53-77 (333) +375 29 360-32-26
                  dmitrochenko@leangroup.by
                </p>
              </div>
              <div className="team-card">
                <div className="team-card-image">
                  <img src={teamcardimg2} alt="" />
                </div>
                <h4 className="team-names">Антух Евгений</h4>
                <p className="team-card-profession">
                  Начальник отдела снабжения
                </p>
                <p className="team-card-info">
                  +375 (17) 270-53-77 (148) +375 44 764-16-28
                  j.antuh@leangroup.by
                </p>
              </div>
              <div className="team-card">
                <div className="team-card-image">
                  <img src={teamcardimg1} alt="" />
                </div>
                <h4 className="team-names">Мисник Елена</h4>
                <p className="team-card-profession">
                  Специалист по работе с клиентами
                </p>
                <p className="team-card-info">
                  +375 (17) 270-53-77 (322) +375 29 329-34-03
                  e.misnik@leangroup.by
                </p>
              </div>
            </div>
            <a href="#teampage" className="team-our-team">
              Наша команда
            </a>
          </div>
        </div>
      </section>
    );
  }
}


// end
