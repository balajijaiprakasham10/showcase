import React from 'react'
import { Link } from 'react-router-dom'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon.jpg'


const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <Link to="/project1">
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Project-1</p>
          </div>
        </Link>
      </div>
      <div className="program">
        <Link to="/project2">
          <img src={program_2} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Project-2</p>
          </div>
        </Link>
      </div>
      <div className="program">
        <Link to="/project3">
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Project-3</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Programs

