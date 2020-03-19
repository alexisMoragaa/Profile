import React, { useState } from 'react'
import {Carousel} from 'react-bootstrap'
import Modal from './Modal'



export default function HobbieModal(props){
    

props.gallery.map((gallery) => {
    return( console.log(gallery))
})


    return(
        <Modal isOpen={props.isOpen}  onClose={props.onClose}>

        <Carousel>
          
        {props.gallery.map((gallery) =>{
                return(

                    <Carousel.Item key={gallery.idImg}>
                        
                        <img
                        className="d-block w-100"
                        src={gallery.urlImage}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-white">{gallery.title}</h3>
                        <p>{gallery.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                )
            })}



            

  
        </Carousel>

            <h5 className="cardTitle">{props.hobbie.nameHobbie}</h5>
            <p class="card-text">{props.hobbie.descriptionHobbie}</p>
        </Modal>

    )

}