import React from "react";
import FooterCompanyDesc from "./footerCompanyDesc/FooterCompanyDesc";
import FooterLinkItem from "./footerLinkItem/FooterLinkItem";
import FooterMenu from "./footerMenu/FooterMenu";
import FooterSocialNetWork from "./footerSocialNetwork/FooterSocialNetWork";

const Footer = () => {
       return (
              <>
                     {/* start of footer*/}
                     <footer className="footer">
                            {/* give .app to section for responsive purpose */}
                            {/* start of .app of footer*/}
                            <section className="app bg-map">
                                   {/* footer has 3 rows*/}
                                   {/* start of .footer-row 1/3*/}
                                   <section className="footer-row">
                                          {/* this row has 3 cols */}
                                            <FooterCompanyDesc />
                                          {/* start of 2/3 col*/}
                                          <section className="footer-col">
                                                 <h3 className="footer-section-title">MOST POPULAR</h3>
                                                <FooterLinkItem title={"Its Make or Break Time for Bitcoin"} date={"Jan 25, 2018"}/>
                                                 <section className="footer-line"></section>
                                                 <FooterLinkItem title={"Bitcoin's roller coster ride is not over"} date={"Jan 25, 2018"}/>
                                          </section>
                                          {/* end of 2/3 col */}
                                          {/* start of 3/3 col*/}
                                          <section className="footer-col">
                                                 <h3 className="footer-section-title">MOST POPULAR</h3>
                                                <FooterLinkItem title={"Its Make or Break Time for Bitcoin"} date={"Jan 25, 2018"}/>
                                                 <section className="footer-line"></section>
                                                 <FooterLinkItem title={"Bitcoin's roller coster ride is not over"} date={"Jan 25, 2018"}/>
                                          </section>
                                          {/* end of 3/3 col*/}
                                   </section>
                                   {/* end of .footer-row 1/3*/}
                                   {/* start of .footer-line 2/3*/}
                                   <section className="footer-line"></section>
                                   {/* end of .footer-line 2/3*/}
                                   {/* start of .footer-row 3/3*/}
                                   <section className="footer-row">
                                          <FooterMenu/>

                                          <FooterSocialNetWork/>
                                   </section>
                                   {/* end of .footer-row 3/3*/}
                            </section>
                     </footer>
                     {/* end of .app of footer*/}
              </>
       );
};

export default Footer;
