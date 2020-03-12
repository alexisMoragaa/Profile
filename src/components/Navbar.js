import React from 'react'
import { link, Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
     
                        <li class="nav-item">
                            <Link className="nav-link" to={'/home'}>Features</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}