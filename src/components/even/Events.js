import React from 'react'
import './Events.css'
import {LuNetwork} from 'react-icons/lu' 
import {GiHealthNormal} from 'react-icons/gi'
import {FaLightbulb} from 'react-icons/fa'
import Navbar from '../landing/Navbar'
import poster from './images/Securehack.jpeg'
export default function Events() {
  return (
    <>
      <Navbar />
      <div className="container-events-column">
            <h1 >Securehack 2023</h1>
        <div className="box">
          <div className="poster">
            <img src={poster} alt="" />
          </div>
          <div className="content">
            <p className='w3-animate-right'>Have you ever wondered how to shield yourself from the dark and mysterious world of cyber threats? Well, buckle up, because we've got something incredibly exciting coming your way! Get ready to level up your cyber defense skills at our mind-blowing Cyber Security Hackathon.
              The aim of this cybersecurity hackathon is to address challenges and cybercrimes in the country. You'll team up with like-minded enthusiasts and work together to crack codes, solve puzzles, and infiltrate virtual fortresses. It's a thrilling race against time that will challenge your problem-solving skills and push you to think outside the box.</p>
              <div className="container-events-row prize-team">
                <div className="details-events container-events-column">
                  <h4>₹25,000</h4>
                  <p>Prize Pool</p>
                </div>
                <div className="details-events container-events-column">
                  <h4>2-4</h4>
                  <p>Team Size</p>
                </div>
              </div>
              <a href="https://forms.gle/auzpEfD4bSKf5Suy9" target='__blank'><button className='button-events'>Register Now</button></a>
          </div>
        </div>
        <h1>Tracks</h1>
        <div className="container-events-row tracks">
          <div class="card">
            <div class="card2">
              <div className="card-content">
                <LuNetwork className='card-icon'/>
                <h3>Computer Networks</h3>
                <p>Lock down your digital fortress with the insights on cybersecurity in computer networks. Use this opportunity to learn and strengthen your defenses in the ever evolving landscape of computer network security.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card2">
            <div className="card-content">
                <FaLightbulb className='card-icon'/>
                <h2>Open Innovation</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit quam blanditiis est laboriosam minus ratione expedita animi, corporis odit incidunt inventore beatae ipsum itaque magni illum quae obcaecati sequi?</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card2">
            <div className="card-content">
                <GiHealthNormal className='card-icon'/>
                <h2>Healthcare</h2>
                <p>The need for robust cybersecurity in healthcare is paramount due to the sensitive nature of medical data. By implementing robust security measures, healthcare organizations can contribute to a safer digital healthcare landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-events-row">
        <div className="small-box">
          <div className="small-poster">
            <img src={poster} alt="" />
          </div>
          <div className="small-content">
            <h1>Securathon</h1>
            <p>Look out for an intensive brainstorming event! An 'Ideathon'. All you need is ideas, a solution, a roadmap and an actionable plan. The main objective of this event is to diagnose predefined problems and come up with the most viable solution. We also will be having a beginner-friendly cybersecurity session. What can be better than an all-out brainstorming event to help generate innovative solutions to existing challenges in our communities? <br /> So, keep a watch out and get ready to ideate to share your notions!</p>
            <div className="container-events-row prize-team">
                <div className="details-events container-events-column">
                  <h4>₹8,000</h4>
                  <p>Prize Pool</p>
                </div>
                <div className="details-events container-events-column">
                  <h4>1-2</h4>
                  <p>Team Size</p>
                </div>
              </div>
              <a href="https://forms.gle/Qe4ue1h6F2suEtnx6" target='__blank'><button className='button-events'>Register Now</button></a>
          </div>
        </div>
        <div className="small-box">
          <div className="small-poster">
            <img src={poster} alt="" />
          </div>
          <div className="small-content">
            <h1>Forensics Workshop</h1>
            <p>Are you keen on learning about cyber security and how to defend yourself from online hazards? Join us for an interactive workshop to explore the depths of cyberspace and gain the skills and knowledge to protect computer systems, and data and to outsmart hackers. Our cybersecurity professionals will guide you through captivating sessions, where you'll learn the latest tricks of uncovering hidden vulnerabilities,  network security, forensics and much more to hone your Cyber Security skills with state-of-the-art tools and techniques.</p>
            
            <a href="https://forms.gle/ydDQgkPwmaAfSEP18" target='__blank'><button className='button-events'>Register Now</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
