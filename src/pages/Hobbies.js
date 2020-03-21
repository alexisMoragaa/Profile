import React from 'react'
import CardHobbie from '../components/CardHobbie';
import HobbieModal from '../components/HobbieModal'
import { BoxLoading } from 'react-loadingg';


import Typed from 'react-typed'

class Hobbies extends React.Component{

    state = {
        modalIsOpen:false,
        hobbieSelect:{},
        loading:true,
        loadinModal:false,
        error:null,
        hobbies:[],
        gallery:[{}],

    }// establecemos el state del componente



     openModal = () => {//creamos una funcion para abrir nuestro modal
        this.setState({modalIsOpen:true})
    }

    closeModal = () => {//creamos una funcion para cerrar nuestro modal
        this.setState({modalIsOpen:false})
    }

    
    search = (e) => {// creamos una funcion de busqueda, esta funcion buscara dentro del state el hobbie que corresponda al id que recibe como parametro 
        const hobbie = this.state.hobbies.filter(hobbie => {
            return `${hobbie.idHobbie}`.includes(e.target.id)
        })
        this.setState({hobbieSelect:hobbie[0],modalIsOpen:true });
        this.fetchGallery(e.target.id);
        //Ademas de buscar el hobbie lo insertamos en el estado hobbie select y realizamos una llamada a fetchGallery, la cual nos traera las imagenes del hobbie
    }

    
    fetchGallery = async (id) => {//fetchGellery realiza una peticion al api de imagenes, y esta responde con las imagenes correspondientes al id enviado
        
        this.setState({loadingModal:true, error:null});
        
        try{
            const response = await fetch(`http://localhost:8080/image/images?idGallery=${id}`)
            const res =  await response.json();
            this.setState({loadingModal:false, gallery:res})
        }catch(error){
            this.setState({loadingModal:false, error:error});
        }
        // Ademas de esto insertamos el resultado de la llamada en el estado gallery
    }


    componentDidMount(){//usamos el componenteDidMount para llamar a la funcion fetchhobbies, esta funcion esta encargada de traer los hobbies desde la api
        this.fetchHobbies()
    }


    fetchHobbies = async () =>{//esta funcion realiza una llamada asincrona al api de hobbies y retorna todos los resultados

        this.setState({loading:true, error:null});

        try{
            const response = await fetch('http://localhost:8080/hobbies')   
            const res = await response.json();
            console.log(res)
            this.setState({loading:false, hobbies:res})
        }catch(error){
            this.setState({loading:false, error:error});
        }
        //Ademas de esto introduce el resultado de la llamada en el estado Hobbies
    }



       
    render(){
        if(this.state.loading){
            
            return (<BoxLoading />)
        }//validamos si el loading de nuestro estado se encuetra en true como resultado de alguna llamada y mostramos un loading
        return(
            <React.Fragment>

             
                <HobbieModal 
                    isOpen={this.state.modalIsOpen}
                    onClose={this.closeModal}
                    hobbie={this.state.hobbieSelect}
                    gallery={this.state.gallery}
                   
                    
                />

                <h1>
                    <Typed
                        className="text-warning bold"
                        strings={['Algunos de mis hobbies']}
                        typeSpeed={70}
                        backSpeed={40}
                    /> 
                </h1>



                {this.state.loadinModal &&(
                    <BoxLoading />
                )}


                <div className="row mt-5">
                    {this.state.hobbies.map((hobbie) => {
                        return(
                            <div className="mt-1 col-sm-12 col-md-6 col-lg-3" key={hobbie.idHobbie}>

                                <CardHobbie 
                                    
                                    hobbie={hobbie}
                                    onOpen={this.openModal}
                                    onClose={this.closeModal}
                                    search={this.search}
                                    modalIsOpen={this.state.modalIsOpen}
                                />
                            </div>

                        )
                    })}

                </div>

                



            </React.Fragment>
        )
    }





    getHobbies = () => {
        
        const data= [
            
        ]

        this.setState({hobbies:data})
    }

    // {
    //     'idHobbie': '3',
    //     'name': 'Desarrollo de Software',
    //     'urlImage': 'https://lh3.googleusercontent.com/etSvYFS7Q1bUmxcNWugTjwcNQLZXasavfHoSdgVF4i4PnTvhxHoyjuk2BFsAOevQ5iYpIq4i8pgmrpMFLTXkCSJQ6j7nw2sC1DAN3_VMyTYIdWEExGrVIGjyBFZqofZQQc9UpSHCkPqsdAJx9SFQNPIQuZ3w3PuuaWraHZ_MH1FtNZtTn4LRuYQs1YiGJBj07BI_r26v6vcdgbCVrakXHwMO5eYEQTzRpHeDu7VdxbnKtizgD9K45dQOLwBHa9h2Xmn8v90YoKip8Sq56R2_nmb1hDSQk5a0e6pW-kXNicQH7SZdNqUrOMFXSEalISC7qFwyYVm4J07PrWCnbFzngzAZwlv0HcvjFU2BzBgyuVUJq9Ms0M_PrNO65PuxDuyuE28rsiW-9UOEcd_qqgk6lfXB7ZqXMWIRy-OCZSQKlWP-teCtLwao2QlAktG89fGlOVdhkWGzjPBFBH2HJ5GPTTgNaLIObjUtNagwb5w4Sl0O9gwloDRZj1oPPq8B8IURUoeLBPJadkFQ1EUHEAqT_-VehtPHyy7LDeqOrUZPoNdgxpziMMvnptklrlGXt-GV_X-liUCEu5sUzNGxdziuNJFHejhJbu-7t1NdPM4STtq71CnUE1fo3QFrrGxbWn1o-oyR5cilOFgKzI5xMt6rm95uN9JyeS7oSP2eyat5UqYFWhPYrWqIU6XWFs0gcso=w833-h626-no',
    //     'imgGallery':[
    //         {'titulo':'titulo2', 'descripcion':'descripcion2', 'img':'img2'},
    //         {'titulo':'titulo2', 'descripcion':'descripcion2', 'img':'img2'},
    //         {'titulo':'titulo2', 'descripcion':'descripcion2', 'img':'img2'},
    //     ], 
    //     'description': 'this is a description Hobbie',
        
    // },


}

export default Hobbies