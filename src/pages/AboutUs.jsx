import React from 'react'
import "./AboutUs.css"
import aboutus from "../../public/about-us.png"
import dummy from "../../public/dummy-img.jpg"
function AboutUs() {
  return (
    <>
    <div className="page-title">
        <div className="title">
            <h2>About Us</h2>
        </div>
    </div>
    <div className="about-area">
        <div className="container-about">
            <div className="col">
                <img alt="image" loading="lazy" width="685" height="494" decoding="async" data-nimg="1" src={aboutus} />
            </div>
            <div className="col">
                <div className="about-content">
                    <div className="section-title">
                        <h2>About Stackmentalist</h2>
                        <div className="bar">

                        </div>
                    </div>
                    <p>StackMentalist is dedicated to crafting customer-oriented, platform-independent software. With extensive experience across diverse business domains and industry verticals, our proven delivery model ensures high-quality, cost-effective application development tailored to your business requirements.
              </p>
              <p>StackMentalist boasts global references affirming its commitment to software development excellence. Our seasoned professionals are adept with the latest development tools, having created numerous systems leveraging top-tier frontend and backend technologies.
              </p>
                              </div>
            </div>
        </div>
    </div>
    <div className="teams">
        {/* <div className="teams-container"> */}
            <div className="founders">
                <h2>Founders</h2>
                <div className="cards">
                        <div className="card">
                            <div className="card-img">
                            <img alt="image" loading="lazy" width="125" height="125" decoding="async" data-nimg="1" src={dummy}/>
                            </div>
                            <div className="card-content">
                            <div class="card-info"><h3>Josh Buttler</h3><span>CEO &amp; Founder</span></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                            <img alt="image" loading="lazy" width="125" height="125" decoding="async" data-nimg="1" src={dummy}/>
                            </div>
                            <div className="card-content">
                            <div class="card-info"><h3>Josh Buttler</h3><span>CEO &amp; Founder</span></div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="team">
            <h2>Team</h2>
            <div className="cards">

            </div>
            </div>
            
        {/* </div> */}
    </div>
    </>
  )
}

export default AboutUs