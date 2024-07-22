import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>We are a multidisciplinary architecture studio, based in Athens since 2014, composed by a group of young and ambitious architects, designers and engineers.</h2>
        {/* <p>nces needed to excel in the dynamic field of education.</p> */}
        <p>Totem Architects was founded by Ahmed Sangaré and Sionfougo Soro in 2015. After 5 years of professional practice in architectural and interior design firms, working on various types of projects such as offices, residences, hotels, educational establishments, and mixed-use buildings, Ahmed and Sionfougo combined their respective experiences to bring together a talented team centred around the values of trust, creativity, and commitment.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
