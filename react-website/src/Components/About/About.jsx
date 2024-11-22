import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlaystate}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img  src={about_img} alt="" className="about-img" />
            <img  src={play_icon} alt="" className="play-icon" onClick={()=>{
              {setPlaystate(true)}
            }} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorsows Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Veniam ab commodi facere voluptate, ut sequi explicabo
                  nemo eum facilis sed. Architecto, officia omnis. Repellendus
                   eius, iusto similique ipsa necessitatibus architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Veniam ab commodi facere voluptate, ut sequi explicabo
                  nemo eum facilis sed. Architecto, officia omnis. Repellendus
                   eius, iusto similique ipsa necessitatibus architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Veniam ab commodi facere voluptate, ut sequi explicabo
                 </p>
        </div>
    </div>
  )
}

export default About