import React from 'react'
import {  Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faHome, faBriefcase, faStickyNote, faSuitcase, faCogs, faPaperPlane, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import jQuery from 'jquery'

export default function Navbar() {


    return (
        <nav id="sidebar">
			<div className="custom-menu">
				<button type="button" id="sidebarCollapse" className="btn btn-primary">
					<i > <FontAwesomeIcon icon={faBars}/> </i>
					<span className="sr-only">Toggle Menu</span>
                   
				</button>
			</div>
			<div className="p-4">

				<h1><Link to='/Profile/Home' className="logo">Amoraga <span>Website</span></Link></h1>

				<ul className="list-unstyled components mb-5">
					
					<li className="active">
                       <Link to="/Profile/Home" ><FontAwesomeIcon icon={faHome} className="mr-3"/> Home</Link>
					</li>
					
					<li className="activeLink">
						<Link to="/Profile/Hobbies"><FontAwesomeIcon icon={faUser} className="mr-3"  /> Hobbies</Link>
					</li>
                       
					<li className="activeLink">
						<Link to="/Profile/Blog/New"><FontAwesomeIcon icon={faUserGraduate} className="mr-3" /> Blog</Link>
					</li>
					<li>
						<Link to="/"><FontAwesomeIcon icon={faStickyNote} className="mr-3"/> Trabajo</Link>
					</li>
					<li>
						<Link to="/"><FontAwesomeIcon icon={faSuitcase} className="mr-3" /> Gallery</Link>
					</li>
					<li>
						<Link to="/"><FontAwesomeIcon icon={faCogs} className="mr-3" /> Services</Link>
					</li>
					<li>
						<Link to="/"><FontAwesomeIcon icon={faPaperPlane}  className="mr-3"/> Contacts</Link>
					</li>
				</ul>



				<div className="footer">
					<p>
						
					</p>
				</div>

			</div>
		</nav>

    )

 
}