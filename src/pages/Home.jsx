import React from "react";
import man from "../../public/Home/man.png";
import code from "../../public/Home/code.png";
import carpet from "../../public/Home/carpet.png";
import bin from "../../public/Home/bin.png";
import desktop from "../../public/Home/desktop.png";
import keyboard from "../../public/Home/keyboard.png";
import table from "../../public/Home/table.png";
import shape1 from "../../public/shapes/shape1.png";
import shape2 from "../../public/shapes/shape2.svg";

import "./Home.css";
function Home() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="main-banner">
          <div className="d-table">
            <div className="d-table-cell">




              
              <div class="container">
                <div class="row h-100 justify-content-center align-items-center">
                  <div class="col-lg-5">
                    <div class="hero-content">
                      <h1 class="aos-init aos-animate">
                        IT Management Service & Support for Your Business.
                      </h1>
                      <p class="aos-init aos-animate">
                        Great Innovations Ahead..!
                        <br />A company with a vision to innovate, build and
                        deliver amazing software solutions.
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                  <div class="banner-image">
                    <img
                      src={man}
                      width="371"
                      height="400"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={code}
                      width="174"
                      height="111"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={carpet}
                      width="510"
                      height="293"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={bin}
                      width="86"
                      height="112"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={desktop}
                      width="105"
                      height="147"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={keyboard}
                      width="121"
                      height="73"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={table}
                      width="380"
                      height="342"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />

                    {/* <img alt="man" loading="lazy" width="371" height="400" decoding="async" data-nimg="1" class="animate__animated animate__fadeInDown animate__delay-0.1s" style="color:transparent" src={man}/> */}
                    {/*<img alt="code" loading="lazy" width="174" height="111" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1s" style="color:transparent" src="/_next/static/media/code.82d4b3f4.png">
          <img alt="carpet" loading="lazy" width="510" height="293" decoding="async" data-nimg="1" class="animate__animated animate__fadeInLeft animate__delay-0.1s" style="color:transparent" src="/_next/static/media/carpet.d8796c37.png">
          <img alt="bin" loading="lazy" width="86" height="112" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/bin.60ce7b76.png">
          <img alt="book" loading="lazy" width="78" height="74" decoding="async" data-nimg="1" class="animate__animated animate__bounceIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/book.11c1c4b9.png">
          <img alt="dekstop" loading="lazy" width="105" height="147" decoding="async" data-nimg="1" class="animate__animated animate__fadeInDown animate__delay-0.1s" style="color:transparent" src="/_next/static/media/dekstop.2c917b9e.png">
          <img alt="dot" loading="lazy" width="94" height="70" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/dot.ee19ae91.png">
          
          <img alt="flower-top-big" loading="lazy" width="78" height="291" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1s" style="color:transparent" src="/_next/static/media/flower-top-big.bbfe9272.png">
          <img alt="flower-top" loading="lazy" width="53" height="87" decoding="async" data-nimg="1" class="animate__animated animate__rotateIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/flower-top.20c351ba.png">
          <img alt="keyboard" loading="lazy" width="121" height="73" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1s" style="color:transparent" src="/_next/static/media/keyboard.7abcad8f.png">
          <img alt="pen" loading="lazy" width="42" height="77" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/pen.2ff0aba4.png">
          <img alt="table" loading="lazy" width="380" height="342" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/table.45335d41.png">
          <img alt="tea-cup" loading="lazy" width="44" height="104" decoding="async" data-nimg="1" class="animate__animated animate__fadeInLeft animate__delay-0.1s" style="color:transparent" src="/_next/static/media/tea-cup.6956e3ff.png">
          <img alt="headphone" loading="lazy" width="62" height="62" decoding="async" data-nimg="1" class="animate__animated animate__rollIn animate__delay-0.1" style="color:transparent" src="/_next/static/media/headphone.60a2794c.png">
          <img alt="main-pic" loading="lazy" width="580" height="560" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1" style="color:transparent" src="/_next/static/media/main-pic.52b102d9.png"> */}
                    </div>
                  </div>
                </div>
              </div>






            </div>
          </div>
          <div class="shape1">
            <img alt="shape" width="202" height="202" src={shape1} />
          </div>
          <div class="shape2 rotateme">
            <img alt="shape" width="22" height="22" src={shape2} />
          </div>
          {/* </div> */}
          <div class="boxes-area">
          <div class="container2">
            <div class="row2 justify-content-center">
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="2"
                        y="14"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">Software Development</a>
                  </h3>
                  <p>
                  We provide expertise in full front to back programme delivery using Scrum, Lean, Agile and Hybrid methodologies. We establish processes and a structure for communication and implementation.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box bg-f78acb">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">Resource Hiring & Outsourcing</a>
                  </h3>
                  <p>
                  Technology expertise coupled with award-winning UX skills is what makes us the leading web development company in India - and helps us build world class websites and web applications.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box bg-c679e3">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">PR & Brand Management</a>
                  </h3>
                  <p>
                  SEO, SEM, PPC, SMO, Content marketing and social media networking, etc. comprise a perfect digital marketing strategy. We offer unique digital marketing solutions that'd load your inbox with inquiries.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box bg-eb6b3d">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="6" y1="3" x2="6" y2="15"></line>
                      <circle cx="18" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M18 9a9 9 0 0 1-9 9"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">Training & Placement</a>
                  </h3>
                  <p>
                  Any part of a design that affects the user is UX design. At StackMentalist, we offer mobile UX design, UX design for SAAS, Product UX design for startups and more, while ensuring that the end user enjoys a great value-added experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div></div></div></div> */}
      </div>
    </>
  );
}

export default Home;
