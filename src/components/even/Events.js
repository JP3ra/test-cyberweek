import React from 'react'
import './Events.css'
import poster from '../events/images/img1.jpeg'
export default function Events() {
  return (
    <div className="container">
      <div className="box">
        <div className="poster">
          <img src={poster} alt="" />
        </div>
        <div className="content">
          <h1>Hackathon</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem modi eum soluta laudantium, iusto animi consequuntur aliquid nisi veritatis perferendis blanditiis non officia odit rem deserunt veniam earum adipisci nostrum delectus quisquam? Illo nulla saepe eligendi delectus laborum nisi?</p>
          <button>
            Register Now
          </button>
        </div>
      </div>
    </div>
  )
}
