import React from 'react'
import Navbar from './Navbar'
import './styles/Navbar.css'


export default function Layout(props){

    return(
        <React.Fragment>
        <div class="wrapper d-flex align-items-stretch">
            <Navbar/>
            <div id="content" class="p-4 p-md-5 pt-5">
                {props.children}
            </div>
        </div>
        </React.Fragment>

    )
}