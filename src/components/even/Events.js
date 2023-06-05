import React from 'react'
import './Events.css'
import { LuNetwork } from 'react-icons/lu'
import { GiHealthNormal } from 'react-icons/gi'
import { FaLightbulb } from 'react-icons/fa'
import poster from './images/Securehack.jpeg'
import Workshop from './images/Forensics (1).png';
import hacakthon from './images/NO CODE (13).png';
import ideathon from './images/Final (4).png';
export default function Events() {
  return (
    <>
      <div className="container-events-column">
        <h1 className='hack-head'>Securehack 2023</h1>
        <div className="box">
          <div className="poster">
            <img src={hacakthon} alt="" />
          </div>
          <div className="content">
            <p className='w3-animate-right' id='hackathonDesc'>Have you ever wondered how to shield yourself from the dark and mysterious world of cyber threats? Well, buckle up, because we've got something incredibly exciting coming your way! Get ready to level up your cyber defense skills at this exhilarating National Level Cyber Security Hackathon.
              The aim of this cybersecurity hackathon is to address challenges and cybercrimes in the country. You'll team up with like-minded enthusiasts and work together to unravel codes, decode puzzles, and infiltrate virtual fortresses. It's a thrilling race against time that will challenge your problem-solving skills and push you to think outside the box.</p>
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
        <h1 className='tracksHeading'>Tracks</h1>
        <div className="container-events-row tracks">
          <div class="card">
            <div class="card2">
              <div className="card-content">
                <LuNetwork className='card-icon' />
                <h3>Computer Networks</h3>
                <p>Level up, outsmart cunning hackers, and become the ultimate cybersecurity champion! Dive into the thrilling world of computer networks, where every click and data packet holds the key to safeguarding your kingdom.</p>
              </div>
            </div>
          </div>

          <div class="card" id='health'>
            <div class="card2">
              <div className="card-content">
                <GiHealthNormal className='card-icon' />
                <h2>Healthcare</h2>
                <p>

                  Get ready for immersive simulations where the stakes are high, as you outsmart agile hackers who are targeting valuable medical data. Unleash your ingenuity, develop specialized security measures, and shield healthcare systems.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card2">
              <div className="card-content">
                <FaLightbulb className='card-icon' />
                <h2>Open Innovation</h2>
                <p>
                  Unleash your creativity on a blank canvas! Push your limits, explore wild ideas, and work on unconventional projects. This category encourages experimentation and provides a platform for diverse and thriving creations. Let your imagination soar!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-events-row">
        <div className="small-box">
          <div className="small-poster">
            <img src={ideathon} alt="" />
          </div>
          <div className="small-content">
            <h1>Securathon</h1>
            <p>Look out for an intensive brainstorming event - an 'Ideathon'. All you need is ideas, a solution, a roadmap and an actionable plan. The main objective of this event is to diagnose predefined problems and come up with the most viable solution. We also will be having a beginner-friendly cybersecurity session. What can be better than an all-out brainstorming event to help generate innovative solutions to existing challenges in our communities? <br /> So, keep a watch out and get ready to ideate and share your notions!</p>
            <div className="container-events-row prize-team">
              <div className="details-events container-events-column">
                <h4>₹8,000</h4>
                <p>Prize Pool</p>
              </div>
              <div className="details-events container-events-column">
                <h4>1-2</h4>
                <p>Team Size</p>
              </div>

              <div className="details-events container-events-column">
                <h4>Free</h4>
                <p>for all</p>
            
              </div>

            </div>
            <a href="https://forms.gle/Qe4ue1h6F2suEtnx6" target='__blank'><button className='button-events'>Register Now</button></a>
          </div>
        </div>
        <div className="small-box forenseics-box" id='forensicsBox'>
          <div className="small-poster">
            <img src={Workshop} alt="" />
          </div>
          <div className="small-content forensics-content">
            <h1 className='forensics' id='forensics'>Forensics Workshop</h1>
            <p id='forensicsDesc'>Are you keen on learning about cyber security and how to defend yourself from online hazards? Join our interactive workshop to explore the depths of cyberspace, acquire essential skills and knowledge to safeguard computer systems and data, and outsmart malicious hackers. Our cybersecurity professionals will guide you through captivating sessions, where you will learn the latest tricks of uncovering hidden vulnerabilities,  network security, forensics and much more to hone your Cyber Security skills with state-of-the-art tools and techniques.</p>

            <a href="https://forms.gle/ydDQgkPwmaAfSEP18" target='__blank'><button className='button-events'>Register Now</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
