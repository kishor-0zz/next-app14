import Link from 'next/link';
import React from 'react';
import Service from '../Components/Service.js/Service';

const HomeOne = () => {
   return (
      <div>
      <header className="vs-header">
            <div className="header-top">
                     <div className="container">
                        <div className="row justify-content-xl-between justify-content-md-center align-items-center gx-50">
                        <div className="col d-none d-xl-block">
                           <div className="header-links">
                                 <ul>
                                    <li>
                                       <a href="#"><i className="fas fa-map-marker-alt"></i> 121 King St. Melbourne VIC 3000, Australia  </a>
                                    </li>
                                    <li>
                                       <a href="#"><i className="fas fa-envelope"></i> example@marino.com </a>
                                    </li>
                                 </ul>
                           </div>
                        </div>
                        <div className="col-md-auto d-flex align-items-center text-center">
                           <div className="dropdown">
                                 <button className="dropdown-toggle" type="button">
                                    <i className="fas fa-globe"></i>  English
                                 </button>
                                 {/* id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" */}
                                 <ul className="dropdown-menu">
                                 {/* aria-labelledby="dropdownMenuButton1" */}
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Bangla</a></li>
                                 </ul>
                           </div>
                           <div className="social-media">
                                 <a href="#"><i className="fab fa-facebook-f"></i></a> 
                                 <a href="#"><i className="fab fa-twitter"></i></a> 
                                 <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                 <a href="#"><i className="fab fa-pinterest-p"></i></a>
                           </div>
                        </div>
                     </div>
                     </div>
            </div>
            <div className="vs-container1">
                  <div className="sticky-wrapper">
                     <div className="sticky-active">
                        <div className="container">
                              <div className="row align-items-center">
                                 <div className="col-auto">
                                    <div className="vs-logo">
                                          <a href="index.html"><img src="assets/img/logo.svg" alt="logo" /></a>
                                          <a href="index.html" className="sticky-logo"><img src="assets/img/logo.svg" alt="logo" /></a>
                                    </div>
                                 </div>
                                 <div className="col">
                                    <div className="row gx-50 align-items-center ">
                                          <div className="col">
                                             <nav className="main-menu d-none d-lg-block">
                                                <ul>
                                                      <li className="menu-item-has-children">
                                                         <a href="index.html">Home</a>
                                                         <ul className="sub-menu">
                                                            <li><a href="index.html">Home One</a></li>
                                                            <li><a href="index-2.html">Home Two</a></li>
                                                            <li><a href="index-3.html">Home Three</a></li>
                                                            <li><a href="index-4.html">Home Four</a></li>
                                                            <li><a href="index-5.html">Home Five</a></li>
                                                         </ul>
                                                      </li>
                                                      <li className="menu-item-has-children">
                                                         <a href="shop.html">Shop</a>
                                                         <ul className="sub-menu">
                                                            <li><a href="shop.html">Shop</a></li>
                                                            <li><a href="shop-with-sidebar.html">Shop With Sidebar</a></li>
                                                            <li><a href="shop-details.html">Shop Details</a></li>
                                                         </ul>
                                                      </li>
                                                      <li className="menu-item-has-children">
                                                         <a href="service.html">Service</a>
                                                         <ul className="sub-menu">
                                                            <li><a href="service.html">Service One</a></li>
                                                            <li><a href="service-2.html">Service Two</a></li>
                                                            <li><a href="service-details.html">Service Details</a></li>
                                                         </ul>
                                                      </li>
                                                   
                                                      <li className="menu-item-has-children">
                                                         <a href="blog.html">Blog</a>
                                                         <ul className="sub-menu">
                                                            <li><a href="blog.html">Blog One</a></li>
                                                            <li><a href="blog-1.html">Blog Grid Sidebar</a></li>
                                                            <li><a href="blog-list.html">Blog List</a></li>
                                                            <li><a href="blog-details.html">Blog Details</a></li>
                                                         </ul>
                                                      </li>
                                                      <li className="menu-item-has-children mega-menu-wrap">
                                                         <a href="#">Pages</a>
                                                         <ul className="mega-menu">
                                                            <li><a href="shop.html">Pagelist 1</a>
                                                                  <ul>
                                                                     <li><a href="index.html">Home One</a></li>
                                                                     <li><a href="index-2.html">Home Two</a></li>
                                                                     <li><a href="index-3.html">Home Three</a></li>
                                                                     <li><a href="index-4.html">Home Four</a></li>
                                                                     <li><a href="index-5.html">Home Five</a></li>
                                                                     <li><a href="about.html">About Us</a></li>
                                                                  </ul>
                                                            </li>
                                                            <li><a href="#">Pagelist 2</a>
                                                                  <ul> 
                                                                     <li><a href="blog.html">Blog One</a></li>
                                                                     <li><a href="blog-1.html">Blog Grid Sidebar</a></li>
                                                                     <li><a href="blog-list.html">Blog List</a></li>
                                                                     <li><a href="blog-details.html">Blog Details</a></li>      
                                                                     <li><a href="error.html">Error Page</a></li>  
                                                                     <li><a href="contact.html">Contact Us</a></li>                                                                                             
                                                                  </ul>
                                                            </li>
                                                            <li><a href="#">Pagelist 3</a>
                                                                  <ul>
                                                                     <li><a href="service.html">Service One</a></li>
                                                                     <li><a href="service-2.html">Service Two</a></li>
                                                                     <li><a href="service-details.html">Service Details</a></li>
                                                                     <li><a href="team.html">Team</a></li>
                                                                     <li><a href="team-details.html">Team Details</a></li>
                                                                     
                                                                  </ul>
                                                            </li>
                                                            <li><a href="#">Pagelist 4</a>
                                                                  <ul>
                                                                     <li><a href="shop.html">Shop</a></li>
                                                                     <li><a href="shop-with-sidebar.html">Shop With Sidebar</a></li>                                                          
                                                                     <li><a href="shop-details.html">Shop Details</a></li>                                                          
                                                                     <li><a href="cart.html">Cart</a></li>                                                                                                                      
                                                                     <li><a href="checkout.html">Check Out</a></li>
                                                                  </ul>
                                                            </li>
                                                         </ul>
                                                      </li>                                             
                                                      <li>
                                                         <a href="contact.html">Contact Us</a>
                                                      </li>
                                                </ul>
                                             </nav>
                                          </div>
                                          <div className="col-auto d-lg-none">
                                             <button className="vs-menu-toggle d-inline-block">
                                                <i className="fal fa-bars"></i>                                           
                                             </button>
                                          </div>
                                    </div>
                                 </div>
                                 <div className="col-auto d-none d-xl-block">
                                    <div className="row align-items-center">
                                          <div className="col-auto">
                                             <div className="header-info">
                                                <div className="icon-btn">
                                                      <i className="fas fa-phone-alt"></i>
                                                </div>
                                                <div className="media-body">
                                                <span className="header-info_label">Call Now</span>
                                                <div className="header-info_link">
                                                      <a href="tel:+26921562148">(+269) 2156 2148</a>
                                                </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-auto">
                                             <button className="icon-btn sideCartToggler has-badge" type="button">
                                                <i className="fas fa-shopping-cart"></i>
                                                <span className="badge">0</span>
                                             </button>
                                          </div>
                                          <div className="col-auto">
                                             <button className="bar-btn sideMenuToggler d-none d-xl-block">
                                                <i className="far fa-bars"></i>
                                             </button>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </div>
                  </div>
            </div>
      </header>
      <div class="hero-layout1 shape-mockup-wrap position-relative">
        <div class="row vs-carousel" data-arrows="false" data-dots="true" data-dots-lg-show="true" data-fade="true">
            <div class="hero-inner">
                <div class="hero-bg background-image" data-bg-src="assets/img/bg/hero-bg-1-1.jpg">
                </div>
                <div class="shape-mockup hero-shape jump-img d-none d-xxl-block">
                    <img src="assets/img/bg/hero-shape1.png" alt="hero shape" />
                </div>
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">Let’s Go..! <br/> Fishing With Marino</h1>
                        <p class="hero-text">Lorem ipsum dolor sit amet consectur adipiscing elit 
                            eiusmod ex tempor incididunt labore dolore magna 
                            aliquaenim ad minim veniam quis nostrud exercitation laboris.</p>
                        <div class="hero-btns">
                            <a href="about.html" class="vs-btn me-3">About Us <i class="far fa-arrow-right"></i></a>
                            <a href="https://www.youtube.com/watch?v=EGW2HS2tqAQ" class="play-btn1 popup-video"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="hero-inner">
                <div class="hero-bg background-image" data-bg-src="assets/img/bg/hero-bg-1-2.jpg">
                </div>
                <div class="shape-mockup hero-shape jump-img d-none d-xxl-block">
                    <img src="assets/img/bg/hero-shape1.png" alt="hero shape"/>
                </div>
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">With Marino <br/> Fishing Let’s Go</h1>
                        <p class="hero-text">Lorem ipsum dolor sit amet consectur adipiscing elit 
                            eiusmod ex tempor incididunt labore dolore magna 
                            aliquaenim ad minim veniam quis nostrud exercitation laboris.</p>
                        <div class="hero-btns">
                            <a href="course.html" class="vs-btn me-3">About Us <i class="far fa-arrow-right"></i></a>
                            <a href="https://www.youtube.com/watch?v=EGW2HS2tqAQ" class="play-btn1 popup-video"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-inner">
                <div class="hero-bg background-image" data-bg-src="assets/img/bg/hero-bg-1-3.jpg">
                </div>
                <div class="shape-mockup hero-shape jump-img d-none d-xxl-block">
                    <img src="assets/img/bg/hero-shape1.png" alt="hero shape"/>
                </div>
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">nostrud exercitation <br/> Fishing With Marino</h1>
                        <p class="hero-text">Lorem ipsum dolor sit amet consectur adipiscing elit 
                            eiusmod ex tempor incididunt labore dolore magna 
                            aliquaenim ad minim veniam quis nostrud exercitation laboris.</p>
                        <div class="hero-btns">
                            <a href="course.html" class="vs-btn me-3">About Us <i class="far fa-arrow-right"></i></a>
                            <a href="https://www.youtube.com/watch?v=EGW2HS2tqAQ" class="play-btn1 popup-video"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
      <Service />
         {/* <nav>
            <ul>
               <li>
                  <Link href="/" >home</Link>
                  <Link href="/about" >about</Link>
                  <Link href="/blog" >blog</Link>
                  <Link href="/" >home</Link>
               </li>
            </ul>
         </nav> */}
      </div>
   );
};

export default HomeOne;