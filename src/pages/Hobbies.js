import React from 'react'
import CardHobbie from '../components/CardHobbie';
import HobbieModal from '../components/HobbieModal'

import Typed from 'react-typed'

class Hobbies extends React.Component{

    state = {
        modalIsOpen:false,
        hobbieSelect:[],
        hobbies: []
    }

    componentDidMount(){
        this.getHobbies();
    }


     openModal = () => {
        this.setState({modalIsOpen:true})
    }

    closeModal = () => {
        this.setState({modalIsOpen:false})
    }


    search = (e) => {
    
         console.log(e.target.id)   
        const hobbie = this.state.hobbies.filter(hobbie => {
            return `${hobbie.idHobbie}`.includes(e.target.id)
        })
        this.setState({hobbieSelect:hobbie[0],modalIsOpen:true });
        
    }
       
    render(){
        return(
            <React.Fragment>

                <HobbieModal 
                    isOpen={this.state.modalIsOpen}
                    onClose={this.closeModal}
                    hobbie={this.state.hobbieSelect}
                />

                <h1>
                    <Typed
                        className="text-warning bold"
                        strings={['Algunos de mis hobbies']}
                        typeSpeed={70}
                        backSpeed={40}
                    /> 
                </h1>

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
            {
                'idHobbie': '1',
                'name': 'Cross Country',
                'urlImage': 'https://lh3.googleusercontent.com/qYJF480dJZ2TG3j1uY9dP2nKpDscLKyjFebGIl4Cns5PJ_FGkEhC5q9XUqhdNRbt0jepnWHebe_y-80i0h3Yzt1bl3QvP0zjcvnMzwkeC2I0DCO9hsxO-UDm5gZF-lGQ1bXjWPJDIk7vHCefJL7K9coq6I4uORj2CccLmy3ovOi-C3ZN0CjMeM2ypV5ISGb4A0F2xVCtZSeZ55dt0pj10wxjwAYW52RC49gVGMusKcv4pCBO3FxdT9sX2tNolBpkneGDYciahvnJl7AQbTvIjrxUl1eQGi91aYyf4o172IMb_z3JHZtRAhQNH8yuD2QFZrKOvlyP84lJM7TGDI3Z30M08Z5b6ROPno_Hn_53MuLO4hA-Pm56yFcmrsgzAs1fPZyMhscBb33NM305HZtgaYaovwI7B8baZl_8bsYR81hD9GRATSEQ1CF9x2-2psvvDCKkdWd93vAlg4Cr2LT_4PTnxFWIZxUIe6Z2lF35LdDVSUqTQTffAI1x6ZSXQvmGasqZzvEFgo0tWrcjrIhiTUvxVpw2lniyIwzyZuz2kbKodOcHAH0uXm1RgB_cLIyS0Wb2_KPj3wDNtxNZlQuPHgeNO_WkfEQwxoJP-P2vpcfyTgJyZHmZOV8Pyo11DwNmvG7NOzdweZlozfjp8fXliUmZkzjxsmZWAKWpjqssGk-Rmhy8-CrITeXvmgaVgSEvnT87CXR05ryraxubJfuoTHZV-t3BwavcI86wrrsQfbVV6cxBRUmlMF7v=w833-h626-no',
                'description': 'this is a description Hobbie',

            },
            {
                'idHobbie': '2',
                'name': 'Micro Controladores',
                'urlImage': 'https://lh3.googleusercontent.com/XRoYePUI1eKdneahqcb7z2e3bWOu76DJYZCQgjAd3F7_6T2C2Uuu5TDO6M2JMuoF7aNou12YY5aJrcDolXCiH1GuSNHcz-VRWttfxxfgDw8O_-Z8jYuUJrhO3QwqfFxcVoNDIuzshPTDduPpfdT0W7FyuvYsadwlHD6bGuqMro0MquvOWe5HQaFYZdNih4sGCTB7e4jXA_xSM6Gush1oZp2D84jGvzgYQB83LCfcU58UkAirwqEPg7jPeK4vl4w-laht5LVENiYHCEFi5EfsLM9nEHHOh87RclEQdJ1qndSRzlD5kCQKf9hRhENf0QlzxqJ0lYRbgJ6Zfx8SWMBy4-di1AmqImLMWbNOjZStcgIF37oSeu1EO6-S0g-yzcerG7tGcURRjWkkwHD8JViWnYlLvWjgL0UY6HeJ0IQhso_ZbPd7jXsy9nKZ28cOCVBcOKjYy_YZfaVEf5iUMkCzD7w2wrUlpp48jdRCgN2i5trePSNo-hfydtiSB5YcWYRMemNPlAGTI3mkW2AWYqe19_WKrHs72PHqqE_aqrB9VkJwlD1aU9cuVAtbCaV8THZ6r3SGuSnGjpcUATTucuOAEi4PsTImUIH0EOd0ojXyRLZYJ5w1OPPdGZosUEpQ7Bsxkzyr6foC0-HPmIWcdiZOd-0Sl2Y-ZzpCar9O37LTvZMfF5R2I-NK6MR1NVYX_Q=w833-h626-no',
                'description': 'this is a description Hobbie',
                
            },
            {
                'idHobbie': '3',
                'name': 'Desarrollo de Software',
                'urlImage': 'https://lh3.googleusercontent.com/etSvYFS7Q1bUmxcNWugTjwcNQLZXasavfHoSdgVF4i4PnTvhxHoyjuk2BFsAOevQ5iYpIq4i8pgmrpMFLTXkCSJQ6j7nw2sC1DAN3_VMyTYIdWEExGrVIGjyBFZqofZQQc9UpSHCkPqsdAJx9SFQNPIQuZ3w3PuuaWraHZ_MH1FtNZtTn4LRuYQs1YiGJBj07BI_r26v6vcdgbCVrakXHwMO5eYEQTzRpHeDu7VdxbnKtizgD9K45dQOLwBHa9h2Xmn8v90YoKip8Sq56R2_nmb1hDSQk5a0e6pW-kXNicQH7SZdNqUrOMFXSEalISC7qFwyYVm4J07PrWCnbFzngzAZwlv0HcvjFU2BzBgyuVUJq9Ms0M_PrNO65PuxDuyuE28rsiW-9UOEcd_qqgk6lfXB7ZqXMWIRy-OCZSQKlWP-teCtLwao2QlAktG89fGlOVdhkWGzjPBFBH2HJ5GPTTgNaLIObjUtNagwb5w4Sl0O9gwloDRZj1oPPq8B8IURUoeLBPJadkFQ1EUHEAqT_-VehtPHyy7LDeqOrUZPoNdgxpziMMvnptklrlGXt-GV_X-liUCEu5sUzNGxdziuNJFHejhJbu-7t1NdPM4STtq71CnUE1fo3QFrrGxbWn1o-oyR5cilOFgKzI5xMt6rm95uN9JyeS7oSP2eyat5UqYFWhPYrWqIU6XWFs0gcso=w833-h626-no',
                'description': 'this is a description Hobbie',
                
            },
        ]

        this.setState({hobbies:data})
    }




}

export default Hobbies