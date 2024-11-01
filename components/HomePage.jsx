import React from 'react'
import Navabar from './Navabar'
import Header from './Header'
import Footer from './Footer'
import InfiniteSlider from './InfiniteSlider'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate=useNavigate()
  const teamMembers = [
    {
      name: 'Member 1',
      nonHoverImage: '../images/chad_image.webp',
      hoverImage: '../images/chad_image-Photoroom.png',
    },
    {
      name: 'Member 1',
      nonHoverImage: '../images/Ernest_McCaleb.webp',
      hoverImage: '../images/animatErnest_McCaleb-Photoroom.png',
    },
    {
      name: 'Member 1',
      nonHoverImage: '../images/LeAnna.jpeg',
      hoverImage: '../images/LeAnna-removebg.jpeg',
    },
    
  ];
  return (
    <>
      <Header heading={"Unlock the Future of AI with Evensoft"} subHeading={"Cyber, Cloud, Trusted AI, and Tactical Edge Solutions – Accelerating Innovation with Unmatched Speed and Precision"} />
      <section class="capabilities">
          <h2>Our Capabilities</h2>
          <h3>What We Do</h3>
        <div class="services">
          <div class="service-item service-item1">
          <i className="fas fa-lightbulb"></i>
            <h3 className='fs-4' >Strategic Advisory</h3>
            <p>Unparalleled intelligence and proven roadmaps for building game-changing security companies</p>
          </div>
          <div class="service-item service-item2">
            <i class="fas fa-briefcase"></i>
            <h3 className='fs-4' >Business Development</h3>
            <p>We help clients develop and execute winning federal and commercial sales strategies</p>
          </div>
          <div class="service-item service-item3">
          <i class="fas fa-puzzle-piece"></i>
            <h3 className='fs-4' >Transaction Advisory</h3>
            <p>Buy-side advisory and sell-side support for private equity and strategic acquirers</p>
          </div>
          <div class="service-item service-item4">
            <i class="fas fa-database"></i>
            <h3 className='fs-4' >Product Strategy</h3>
            <p>We help our clients design, build, position, and launch their cybersecurity solutions successfully</p>
          </div>
          <div class="service-item service-item5">
          <i class="fas fa-chart-line"></i>
            <h3 className='fs-4' >Corporate Finance</h3>
            <p>We design and build world-class financial models, budgets, forecasts, and management reporting tools</p>
          </div>
          <div class="service-item service-item6">
            <i class="fas fa-shield"></i>
            <h3 className='fs-4' >Data Privacy & AI</h3>
            <p>Helping clients manage risk and navigate the evolving data privacy & AI regulatory environments</p>
          </div>
        </div>
      </section>
      <InfiniteSlider/>
      <div className="team-section">
        <h2>OUR TEAM</h2>
        <h3>Proven Cybersecurity Experts</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div
                className="image-container"
                style={{ backgroundImage: `url(${member.nonHoverImage})` }}
              >
                <img
                  src={member.hoverImage}
                  alt={member.name}
                  className="hover-image"
                />
              </div>
              {/* <p>{member.name}</p> */}
            </div>
          ))}
        </div>
        <button className="leadership-button" onClick={()=>{
          navigate("/About")
        }} variant="outline-secondary text-white">LEADERSHIP TEAM</button>
      </div>

      <Footer />
    </>
  ) 
}

export default HomePage