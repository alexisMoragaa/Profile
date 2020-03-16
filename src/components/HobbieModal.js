import React from 'react'

import Modal from './Modal'


export default function HobbieModal(props){
    console.log(props.hobbie)
    console.log("que cosas no")
    return(
        <Modal isOpen={props.isOpen}  onClose={props.onClose}>

            <div className="card" >
                <img src={props.hobbie.urlImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 className="cardTitle">{props.hobbie.name}</h5>
                    <p class="card-text">{props.hobbie.description}</p>
                </div>
            </div>

        </Modal>

    )

}