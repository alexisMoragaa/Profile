import React from 'react'
import ReactDom from 'react-dom'
import {Button, Modal} from 'react-bootstrap'
// import './styles/Modal.css'

export default function Modal_(props){
    if(props.isOpen === false){
        return null;
    }

  

    return(
        ReactDom.createPortal(
 


            <Modal show={props.isOpen} onHide={props.onClose} size='lg' aria-labelledby="contained-modal-title-vcenter"  centered>
 

                <Modal.Body>
                    {props.children}
                </Modal.Body>

               
            </Modal>




        ,document.getElementById('portalModal'))
    )
}