import React from 'react'



export default function CardHobbie(props){
   return(
       <React.Fragment>

        <div className="card" onClick={props.search} id={props.hobbie.idHobbie}>
                <img src={props.hobbie.urlImage} class="card-img-top" alt="..." id={props.hobbie.idHobbie}/>
                <div class="card-body" id={props.hobbie.idHobbie}>
                    <h5 className="cardTitle">{props.hobbie.name}</h5>
                    <p class="card-text">{props.hobbie.description}</p>
                </div>
        </div>

      
       </React.Fragment>
   )
}