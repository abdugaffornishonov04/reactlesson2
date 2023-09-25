import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { Component } from 'react'
import styles from "./Productsection.module.css"
import "../../styles/main.scss"
import tabpic1 from "../../assets/images/tabpic1.png"
import tabpic2 from "../../assets/images/tabpic2.png"
import tabpic3 from "../../assets/images/tabpic3.png"
import tabpic4 from "../../assets/images/tabpic4.png"
import tabpic5 from "../../assets/images/tabpic5.png"
// export default class Productssection extends Component {
//   render() {
//     return (
//       <section className="products-section">
//         <div className="container">
//           <div className="products-wrapper">
            
//           </div>
//         </div>
//       </section>
//     )
//   }
// }


export default class Productssection extends Component {
  render() {
    return (
      <section className={styles["products-section"]}>
        <div className="container">
          <div className={styles["products-wrapper"]}>
            <h2 className={styles["products-title"]}>
              Наша <span>продукция</span>
            </h2>
            <Tabs>
              <TabList>
                <Tab>Ламинатные тубы</Tab>
                <Tab>Экструзионные тубы</Tab>
                <Tab>Другая упаковка</Tab>
              </TabList>

              <TabPanel>
                <h2>
                  <div className="pr-tabs-wrapper">
                      <img src={tabpic1} alt="" />
                      <img src={tabpic2} alt="" />
                      <img src={tabpic3} alt="" />
                      <img src={tabpic4} alt="" />
                      <img src={tabpic5} alt="" />
                  </div>
                </h2>
              </TabPanel>
              <TabPanel>
                <h2>
                   <div className="pr-tabs-wrapper">
                      <img src={tabpic5} alt="" />
                      <img src={tabpic4} alt="" />
                      <img src={tabpic3} alt="" />
                      <img src={tabpic2} alt="" />
                      <img src={tabpic1} alt="" />
                  </div>
                </h2>
              </TabPanel>
              <TabPanel>
                <h2>
                   <div className="pr-tabs-wrapper">
                      <img src={tabpic3} alt="" />
                      <img src={tabpic5} alt="" />
                      <img src={tabpic1} alt="" />
                      <img src={tabpic2} alt="" />
                      <img src={tabpic4} alt="" />
                  </div>
                </h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

