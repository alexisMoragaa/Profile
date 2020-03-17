import React, { useState } from 'react'
import {Carousel} from 'react-bootstrap'
import Modal from './Modal'



export default function HobbieModal(props){
    
   props.gallery.map((img)=>{
       return(console.log(img.img))
   })
  
// console.log(props.gallery[0].img)




    return(
        <Modal isOpen={props.isOpen}  onClose={props.onClose}>





        <Carousel>

            {props.gallery.map((gallery) =>{
                return(

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={gallery.img}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>{gallery.titulo}</h3>
                        <p>{gallery.descripcion}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                )
            })}

  
        </Carousel>

            <h5 className="cardTitle">{props.hobbie.name}</h5>
            <p class="card-text">{props.hobbie.description}</p>
        </Modal>

    )

}