import React, { useEffect } from 'react';
import './Landing.css'
import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import poster from './images/landing.png';
export default function Landing() {
  useEffect(() => {
    const triangleBase = 48;

    const container = document.querySelector(".triangle-container");

    const instantiateGrid = () => {
      container.innerHTML = '';
      const width = document.body.clientWidth;
      const heigth = document.body.clientHeight * 0.4;

      let columns = Math.ceil(width / (triangleBase * 2)) + 1;
      let rows = Math.ceil(heigth / triangleBase * 1.733);
      container.style.setProperty('--columns', columns);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          createTriangleSet(x + y * columns, x, y);
        }
      }
    }

    const createTriangleSet = (index, column, row) => {
      let el = document.createElement("div");
      el.classList.add("triangle-set");
      if (row % 2 === 0) el.classList.add("triangle-set--offset");

      container.appendChild(el);
    }

    window.onresize = () => {
      instantiateGrid();
    }

    instantiateGrid();
    const glow = document.body.querySelector("#glow")

    window.addEventListener('mousemove', (event) => {
      glow.style.top = event.pageY + "px";
      glow.style.left = event.pageX + "px";
    });
    
  }, []);
  return (
    <>
      <div cLass="hero">
        <div id="glow"></div>
        {/* <Navbar/> */}
        <div className="triangle-container"></div>
          <div className="conatiner-landing">
            <div className="left-landing">
              <h1>Starts In</h1>
              <CountdownTimer
        days={2}
        hours={6}
        minutes={30}
        seconds={0}
      />
      <a href='/events'><input type="button" value="Explore Events and Workshops"  className="button-landing" /></a>
            </div>
            <div className="right-landing">
              <img src={poster} alt="this is the main image" /> 
            </div>
          </div>
          {/* <h1>Cyberweek</h1> */}
      </div>
    </>
  )
}