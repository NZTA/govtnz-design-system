import React from 'react';
import { Link } from 'gatsby';
// import FooterWrapper from '@govtnz/ds/build/react-ts/FooterWrapper'
// import FooterStandard from '@govtnz/ds/build/react-ts/FooterStandard'
// import Container from '@govtnz/ds/build/react-ts/FlexContainer';
// import Row from '@govtnz/ds/build/react-ts/FlexRow';
// import Column from '@govtnz/ds/build/react-ts/FlexColumn';

import Icon from '../components/Icon';
import './footer.scss';

// import LogoIcon from '../commons/svgs/icon-nzg.svg';
// import CCIcon from '../commons/svgs/icon-cc.svg';
// import CCByIcon from '../commons/svgs/icon-cc-by.svg';
// import CoatIcon from '../commons/svgs/icon-coat-of-arms.svg';

const Footer = () => (
  // <footer className="g-footer-wrapper" role="contentinfo">
  //   <div className="g-footer__standard">
  //     <Container width="fixed">
  //       <Row>
  //         <Column xs="12" sm="10" md="10" lg="10">
  //           <div className="g-footer__standard-item">
  //             <ul className="g-footer__standard-inline-list">
  //               <li className="g-footer__standard-inline-list-item">
  //                 <a
  //                   className="g-footer__standard-link"
  //                   href="https://www.digital.govt.nz/home/about-digital-govt-nz/contact-us/"
  //                 >
  //                   Contact
  //                 </a>
  //               </li>
  //               <li className="g-footer__standard-inline-list-item">
  //                 <a
  //                   className="g-footer__standard-link"
  //                   href="https://www.digital.govt.nz/home/about-digital-govt-nz/privacy/"
  //                 >
  //                   Privacy
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </Column>
  //       </Row>
  //       <Row>
  //         <Column xs="12" sm="8" md="10" lg="9">
  //           <a
  //             href="https://www.govt.nz/"
  //             className="g-footer__standard-link--plain"
  //           >
  //             <span className="g-footer-visually-hidden">
  //               New Zealand Government
  //             </span>
  //             <Icon
  //               className="g-footer__icon-govt-logo"
  //               role="presentation"
  //               id={LogoIcon.id}
  //             />
  //           </a>
  //           <div className="g-footer__standard-licence">
  //             <p className="g-footer__standard-small-text">
  //               Contains public sector information licensed under the Open
  //               Government Licence v3.0.
  //             </p>
  //             <p
  //               className="g-footer__standard-small-text"
  //               style={{ marginBottom: 0 }}
  //             >
  //               <a
  //                 href="https://creativecommons.org/licenses/by/4.0/"
  //                 className="g-footer__standard-link--plain"
  //               >
  //                 <span className="g-footer-visually-hidden">
  //                   Creative Commons 4.0 International Licence
  //                 </span>
  //                 <Icon
  //                   className="g-footer__icon-cc"
  //                   role="presentation"
  //                   id={CCIcon.id}
  //                 />
  //                 &nbsp;
  //                 <Icon
  //                   className="g-footer__icon-cc"
  //                   role="presentation"
  //                   id={CCByIcon.id}
  //                 />
  //               </a>
  //               <br />
  //               Unless indicated otherwise, all content is licensed for re-use
  //               under a Creative Commons Attribution 4.0 International Licence
  //             </p>
  //           </div>
  //         </Column>
  //         <Column xs="12" sm="4" md="2" lg="3">
  //           <div className="g-footer__standard-copyright">
  //             <span className="g-footer-visually-hidden">
  //               New Zealand Coat of Arms
  //             </span>
  //             <Icon
  //               className="g-footer__icon-coat-of-arms"
  //               role="presentation"
  //               id={CoatIcon.id}
  //             />
  //             <p className="g-footer__standard-small-text">
  //               © Crown Copyright <span>{new Date().getFullYear()}</span>
  //             </p>
  //           </div>
  //         </Column>
  //       </Row>
  //     </Container>
  //   </div>

<footer className="g-footer-wrapper" role="contentinfo">
    <div class="section theme--neutral footer">
            <div class="wrapper">
                <div class="layout">
                    <div class="grid grid-flip-small">
                        <div class="col large-two-thirds medium-full-size ">
                            <ul class="footer_pages list-inline list-unstyled small-block-list">
                                <li>
                                    <a href="/about-us/">
                                        <div class='icon-wrapper'>
                                            <i class="i i-about-grey "></i>
                                        </div>
                                        <span>About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <div class='icon-wrapper'>
                                            <i class="i i-about-grey"></i>
                                        </div>
                                        <span>Careers</span>
                                    </a>
                                </li>
                               <li>
                                    <a href="/contact-us/">
                                        <div class='icon-wrapper'>
                                            <i class="i i-contact-grey"></i>
                                        </div>
                                        <span>Contact</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/search/">
                                        <div class='icon-wrapper'>
                                            <i class="i i-search-grey"></i>
                                        </div>
                                        <span>Search</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy/">
                                        <div class='icon-wrapper'>
                                            <i class="i i-privacy-grey"></i>
                                        </div>
                                        <span>Privacy</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col large-third">
                            <ul class="list-unstyled list-inline footer_social-links">
                                <li class='[  ]'>
                                    <a href="/about-us/">
                                        <i class="i i-twitter-grey"></i>
                                    </a>
                                </li>
                                <li class='[  ]'>
                                    <a href="/">
                                        <i class="i i-youtube-grey"></i>
                                    </a>
                                </li>
                                <li class='[ ]'>
                                    <a href="/contact-us/">
                                        <i class="i i-pinterest-grey"></i>
                                    </a>
                                </li>
                                <li class='[ ]'>
                                    <a href="/search/">
                                        <i class="i i-linkedin-grey"></i>
                                    </a>
                                </li>
                                <li class='[  ]'>
                                    <a href="/search/">
                                        <i class="i i-facebook-grey"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col medium-half">
                            <p class='small'>
                                &copy; 2015 NZ Transport Agency, all rights reserved
                            </p>

                        </div>
                        <div class="col medium-half text-right--medium">
                            <p>
                                <a href="#">
                                    <i class="i i-nzgovt"></i>
                                    <span class="sr-only">New Zealand Government</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



  </footer>
);

export default Footer;

{
  /* <FooterWrapper>
    <FooterStandard
      src={CoatOfArms}
      href="#"
      href2="#"
      href3="#"
      href4="https://www.govt.nz/"
      href5="https://creativecommons.org/licenses/by/4.0/"
      copyrightYear={new Date().getFullYear()}
    />
    
  </FooterWrapper> */
}
