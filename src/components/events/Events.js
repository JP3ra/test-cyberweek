import img1 from './images/img1.jpeg'
import React from 'react'
import './Events.css'
function events() {
  return (
    <div className='event'>
     <div className="flex-container">
          
          <div className='flex-item item1'>
            <div className='flex-image'><img src={img1} alt='not available'/></div>
            <div className='flex-desc'>
              <h2 className='textglow'>Hackathon</h2>
              Within the halls of knowledge, lies a regal mystery waiting to be solved. 
                Greetings from BMSCE IEEE Computer Society
                Looking for an exhilarating adventure unlike any other? 
                
            </div>
            <div className='flex-button'>
              <button class="button"><span class="button-content">Register </span></button>
            </div>
          </div>


          <div className='flex-item item2'>
            <div className='flex-image row1'><div className='image'><img src={img1} alt='not available'/></div></div>
            <div className='flex-desc row2'>
              <h2 className='textglow'>Hackathon</h2>
              Within the halls of knowledge, lies a regal mystery waiting to be solved. 
                Greetings from BMSCE IEEE Computer Society
                Looking for an exhilarating adventure unlike any other? 
                
            </div>
            <div className='flex-button row3'>
              <button class="button"><span class="button-content">Register </span></button>
            </div>
          </div>

          <div className='flex-item item2'>
            <div className='flex-image row1'><div className='image'><img src={img1} alt='not available'/></div></div>
            <div className='flex-desc row2'>
              <h2 className='textglow'>Hackathon</h2>
              Within the halls of knowledge, lies a regal mystery waiting to be solved. 
                Greetings from BMSCE IEEE Computer Society
                Looking for an exhilarating adventure unlike any other? 
                
            </div>
            <div className='flex-button row3'>
              <button class="button"><span class="button-content">Register </span></button>
            </div>
          </div>

          
      </div>
    </div>
  )
}

export default events

            