import React from 'react'

import Typed from 'react-typed'

class Home extends React.Component{

    render(){
        return(
            <div className="">

                <h1>
                   Hola, mi nombre Alexis ✋. <br/>
                    <span className="mr-2"></span> Soy  <span>  </span>
                    <Typed
                        className="text-warning bold"
                        strings={['Desarrollador Web','Trabajo en Backend', 'y', 'Frontend']}
                        typeSpeed={70}
                        backSpeed={40}
                    /> 
               </h1>
                        

               <h5>
                   <Typed
                       strings={[' Durante estas semanas estare construyendo un sitio basado en lo que aprendi en el curso de react en platzi ✊']}
                       startDelay={10500}
                       typeSpeed={50}
                        backSpeed={100}
                   />
               </h5>

            </div>
        )
  
    }
}


export default Home