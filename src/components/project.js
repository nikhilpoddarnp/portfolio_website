import React from 'react'
import './project.css'
import Recipe from '../assests/foodrecipe.jpeg'
import Task from '../assests/taskmanager.png'

export default function project() {
  return (
   <section id='project'>
    <h2 className='projetTitle'>My Projects</h2>
    <span className='projectDesc'>Here are my projects</span>
    <div className='project-item'>
        <div className='item-details'>
            <p className='P1'>Task Manager</p>
            <p className='P2'>ReactJS,NodeJS,MongoDB</p>
        </div>
        <a href='https://github.com/nikhilpoddarnp' ><img src={Task} alt='Project-1' className='projectImg'/></a>
       
    </div>
    <div className='project-item'>
        <div className='item-details'>
            <p className='P1'>RECIPE REPO </p>
            <p className='P2'>ReactJS,Node.js,MongoDB</p>
        </div>
        <a href='https://github.com/nikhilpoddarnp'><img src={Recipe} alt='Project-1' className='projectImg'/></a>
       
    </div>
   </section>
  )
}
