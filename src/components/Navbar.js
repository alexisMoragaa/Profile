import React from 'react'
import {  Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faHome, faBriefcase, faStickyNote, faSuitcase, faCogs, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (
        <nav id="sidebar">
			<div class="custom-menu">
				<button type="button" id="sidebarCollapse" class="btn btn-primary">
					<i > <FontAwesomeIcon icon={faBars}/> </i>
					<span class="sr-only">Toggle Menu</span>
                   
				</button>
			</div>
			<div class="p-4">
				<h1><a href="index.html" class="logo">Amoraga <span>Website</span></a></h1>
				<ul class="list-unstyled components mb-5">
					<li className="active">
					
                       <Link to="/home" ><FontAwesomeIcon icon={faHome} className="mr-3"/> Home</Link>
                       
					</li>
					<li>
						<a href="#"><FontAwesomeIcon icon={faUser} className="mr-3"  /> About</a>
					</li>
					<li>
						<a href="#"><FontAwesomeIcon icon={faBriefcase} className="mr-3" /> Works</a>
					</li>
					<li>
						<a href="#"><FontAwesomeIcon icon={faStickyNote} className="mr-3"/> Blog</a>
					</li>
					<li>
						<a href="#"><FontAwesomeIcon icon={faSuitcase} className="mr-3" /> Gallery</a>
					</li>
					<li>
						<a href="#"><FontAwesomeIcon icon={faCogs} className="mr-3" /> Services</a>
					</li>
					<li>
						<a href="#"><FontAwesomeIcon icon={faPaperPlane}  className="mr-3"/> Contacts</a>
					</li>
				</ul>



				<div class="footer">
					<p>
	
					</p>
				</div>

			</div>
		</nav>

    )

 
}