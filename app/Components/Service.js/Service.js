import { getAllSrvices } from '@/lib/getAllPosts';
import React from 'react';

const Service = async () => {
   const data =  await getAllSrvices();
   return (
      <section class="space service">
        <div class="container">
            <div class="title-area text-center wow fadeInUp wow-animated" data-wow-delay="0.3s">
                <span class="sec-subtitle">our Service</span>
                <h2 class="sec-title">Our Awesome Services</h2>
                <div class="sec-line"></div>
            </div>
            <div class="row vs-carousel" data-slide-show="4" data-lg-slide-show="3"
            data-md-slide-show="2"  data-center-mode="true" data-xl-center-mode="true" data-ml-center-mode="true"
            data-lg-center-mode="true" data-md-center-mode="true"  data-sm-center-mode="true"
            data-xs-center-mode="true" data-arrows="true" data-dots="false">
               {data.map(service=> <div service={service} class="col-lg-4">
                  <div class="service-style1">
                      <div class="service-img"><img src="assets/img/service/sr-1-1.png" alt="service thumbnail"/></div>
                      <div class="service-icon"><img src="assets/img/icon/sr-1-1.svg" alt="icon"/></div>
                      <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Free Fishing</a></h3>
                      <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                      <div class="link-btn">
                          <a href={`/blog/${service.id}`}  >Read More {service.id}<i class="far fa-arrow-right"></i></a>
                      </div>
                  </div>
              </div>)}
               
                {/* <div class="col-auto">
                    <div class="service-style1">
                        <div class="service-img"><img src="assets/img/service/sr-1-2.png" alt="service thumbnail"/></div>
                        <div class="service-icon"><img src="assets/img/icon/sr-1-2.svg" alt="icon"/></div>
                        <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Float Fishing</a></h3>
                        <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                        <div class="link-btn">
                            <a href="service-details.html">Read More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="service-style1">
                        <div class="service-img"><img src="assets/img/service/sr-1-3.png" alt="service thumbnail"/></div>
                        <div class="service-icon"><img src="assets/img/icon/sr-1-3.svg" alt="icon"/></div>
                        <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Solo & Team Fishing</a></h3>
                        <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                        <div class="link-btn">
                            <a href="service-details.html">Read More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="service-style1">
                        <div class="service-img"><img src="assets/img/service/sr-1-4.png" alt="service thumbnail"/></div>
                        <div class="service-icon"><img src="assets/img/icon/sr-1-4.svg" alt="icon"/></div>
                        <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Wild Fishing</a></h3>
                        <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                        <div class="link-btn">
                            <a href="service-details.html">Read More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="service-style1">
                        <div class="service-img"><img src="assets/img/service/sr-1-1.png" alt="service thumbnail"/></div>
                        <div class="service-icon"><img src="assets/img/icon/sr-1-5.svg" alt="icon"/></div>
                        <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Free Fishing</a></h3>
                        <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                        <div class="link-btn">
                            <a href="service-details.html">Read More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="service-style1">
                        <div class="service-img"><img src="assets/img/service/sr-1-2.png" alt="service thumbnail"/></div>
                        <div class="service-icon"><img src="assets/img/icon/sr-1-6.svg" alt="icon"/></div>
                        <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Float Fishing</a></h3>
                        <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                        <div class="link-btn">
                            <a href="service-details.html">Read More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="service-style1">
                        <div class="service-img"><img src="assets/img/service/sr-1-3.png" alt="service thumbnail"/></div>
                        <div class="service-icon"><img src="assets/img/icon/sr-1-7.svg" alt="icon"/></div>
                        <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Solo & Team Fishing</a></h3>
                        <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                        <div class="link-btn">
                            <a href="service-details.html">Read More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="service-style1">
                        <div class="service-img"><img src="assets/img/service/sr-1-4.png" alt="service thumbnail"/></div>
                        <div class="service-icon"><img src="assets/img/icon/sr-1-5.svg" alt="icon"/></div>
                        <h3 class="service-title h6"><a class="text-inherit" href="service-details.html">Wild Fishing</a></h3>
                        <p class="service-text">Curabitur is a aliquet quam id dui posre blandgit ivamus magna.</p>
                        <div class="link-btn">
                            <a href="service-details.html">Read More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
   );
};

export default Service;