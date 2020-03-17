import React from 'react'
import CardHobbie from '../components/CardHobbie';
import HobbieModal from '../components/HobbieModal'

import Typed from 'react-typed'

class Hobbies extends React.Component{

    state = {
        modalIsOpen:false,
        hobbieSelect:{imgGallery:[{}]},
        hobbies: [
            {
                'idHobbie': '1',
                'name': 'Cross Country',
                'urlImage': 'https://lh3.googleusercontent.com/qYJF480dJZ2TG3j1uY9dP2nKpDscLKyjFebGIl4Cns5PJ_FGkEhC5q9XUqhdNRbt0jepnWHebe_y-80i0h3Yzt1bl3QvP0zjcvnMzwkeC2I0DCO9hsxO-UDm5gZF-lGQ1bXjWPJDIk7vHCefJL7K9coq6I4uORj2CccLmy3ovOi-C3ZN0CjMeM2ypV5ISGb4A0F2xVCtZSeZ55dt0pj10wxjwAYW52RC49gVGMusKcv4pCBO3FxdT9sX2tNolBpkneGDYciahvnJl7AQbTvIjrxUl1eQGi91aYyf4o172IMb_z3JHZtRAhQNH8yuD2QFZrKOvlyP84lJM7TGDI3Z30M08Z5b6ROPno_Hn_53MuLO4hA-Pm56yFcmrsgzAs1fPZyMhscBb33NM305HZtgaYaovwI7B8baZl_8bsYR81hD9GRATSEQ1CF9x2-2psvvDCKkdWd93vAlg4Cr2LT_4PTnxFWIZxUIe6Z2lF35LdDVSUqTQTffAI1x6ZSXQvmGasqZzvEFgo0tWrcjrIhiTUvxVpw2lniyIwzyZuz2kbKodOcHAH0uXm1RgB_cLIyS0Wb2_KPj3wDNtxNZlQuPHgeNO_WkfEQwxoJP-P2vpcfyTgJyZHmZOV8Pyo11DwNmvG7NOzdweZlozfjp8fXliUmZkzjxsmZWAKWpjqssGk-Rmhy8-CrITeXvmgaVgSEvnT87CXR05ryraxubJfuoTHZV-t3BwavcI86wrrsQfbVV6cxBRUmlMF7v=w833-h626-no',
                'imgGallery':[
                    {'titulo':'Zapatillas con Fijación', 'descripcion':'Estas son mis zapatillas con fijación', 'img':'https://lh3.googleusercontent.com/qYJF480dJZ2TG3j1uY9dP2nKpDscLKyjFebGIl4Cns5PJ_FGkEhC5q9XUqhdNRbt0jepnWHebe_y-80i0h3Yzt1bl3QvP0zjcvnMzwkeC2I0DCO9hsxO-UDm5gZF-lGQ1bXjWPJDIk7vHCefJL7K9coq6I4uORj2CccLmy3ovOi-C3ZN0CjMeM2ypV5ISGb4A0F2xVCtZSeZ55dt0pj10wxjwAYW52RC49gVGMusKcv4pCBO3FxdT9sX2tNolBpkneGDYciahvnJl7AQbTvIjrxUl1eQGi91aYyf4o172IMb_z3JHZtRAhQNH8yuD2QFZrKOvlyP84lJM7TGDI3Z30M08Z5b6ROPno_Hn_53MuLO4hA-Pm56yFcmrsgzAs1fPZyMhscBb33NM305HZtgaYaovwI7B8baZl_8bsYR81hD9GRATSEQ1CF9x2-2psvvDCKkdWd93vAlg4Cr2LT_4PTnxFWIZxUIe6Z2lF35LdDVSUqTQTffAI1x6ZSXQvmGasqZzvEFgo0tWrcjrIhiTUvxVpw2lniyIwzyZuz2kbKodOcHAH0uXm1RgB_cLIyS0Wb2_KPj3wDNtxNZlQuPHgeNO_WkfEQwxoJP-P2vpcfyTgJyZHmZOV8Pyo11DwNmvG7NOzdweZlozfjp8fXliUmZkzjxsmZWAKWpjqssGk-Rmhy8-CrITeXvmgaVgSEvnT87CXR05ryraxubJfuoTHZV-t3BwavcI86wrrsQfbVV6cxBRUmlMF7v=w833-h626-no'},
                    {'titulo':'Plaza Antilen', 'descripcion':'Plaza ubicada en el cerro san cristobal', 'img':'https://lh3.googleusercontent.com/aGnyeAQcY1nSsctavmnamFWGvVHgXrk1WY01raFgyBUs4O35egmnihR3o3HIYs3OkuLGNyTYFK20ysaIwjGLErESJBYUIGjPDo91oG-IhrtevPfP7hsGCZFxSQSp2bJH9pKtNG9B4zzpd2hHuSkSBH1okoTsepe7jNAXoGtf9djY5pDUjE9yXZofHbiOduSt8sw3WqW0W-AR0DnIZ6C1HMLbpmV7uU03kl2U9ghflM3cD4dnTn0-Ioc1Jxmjefx7_M_jHIITMVAbsC9gPupXg4j30DEbeGQyTeMSIEeP_I_OgGcHySa2aAQaP2zFj6aKZxaOWwM82_6oyix41fkce7qGZDjZTmRzp011sLkjr1CfDCgJf_u--VvMW6FHvWrsAUXRirpxJUE75usxF1GgrJTVIQP5owMRfzL2PAKlO5UhRiVE_pxJP2n-05fY-reFlKAHugDi3DgiGT479GsHZf5btEcyqQzf2dM9V7hNuhmnNasP63S3sgz3_mKEY0a0mLpCdZbDWoZVwr8kNSxFZSwfNRSQ_OjU5v6wW2PTdyLFnK2BVzAClSSxsAsbPkOo-CJ-GWFg5e5IR1kr0jJVdxGRfig6XNH33zHlRfelzp5EU6Ozotb446jBg_sSKp0flUW95dUXMbuKgopPJAmk2MTwUie-D0jbcDyTB2515b9lUwoUokA_Io4AaDf-M_M=w1258-h943-no'},
                    {'titulo':'Cerro san Cristobal', 'descripcion':'Senderos del cerro san cristobal', 'img':'https://lh3.googleusercontent.com/4HNs6nBMMPLvLwMI5wMeyiMgl0A0J0sndkG6E6RJiHhoObk0AhWGHP0ReYdMBhSIVKecCkc14FZ0vTil2jwzmvfZ5223KPW5s3oPdKF_-4j2Kch8Qd-htEdqcR66zJxCBcHJW74YxFPMEMOt_xMMKd90CL1hYcMigPzT4JvYeIrYi2KF9Nfrtz6TjVfO1tbPDLYoUERIiHbkI13fSVw54MWKGbkWebVZrRC8YESPsD24wvCCCqhDDJSfMxDReQT23RGG66whijL48frLdHWofsdH5OYwTSBwf4dPD6EV5vo5I0yWiuEakBrNlPAP85Y9M4c0vwooeSmjsc1PiV9l0Tuv-nrEiRvZ5_kx1rxae_a1-aX5ANBjrL4EVFv6CREoNUjOjU_5JN0o5i3yf7g5t3cqs_dlQjbt1RGE7Q_8bPmrXhsODyw0NxI1ayunTrfGlGyBfrhzJknQM0HMid4dZtny3c_as2e3L-YHFl9fi9n2xojD1dnpAhRwjEua5F9OGez-La_3ccmXVjm7K9NWZ1hh9HxtdOViHNRAAXsSeh7LWV54dYa6hnm6_axb5Ea0jDwdujKGDkmZt9TelCN87S3ngS4JHPMH7rXsQKIDnvf2vFIkFkBmlWAQSmzHaDXq98zfrprBZ5WemPENpf20Tr7JvFxN14hAtaOkQ7TNIwlqt98OwrBQ91Etcs90Fw=w1258-h943-no'},
                ],
                    
                'description': 'this is a description Hobbie',

            },
            {
                'idHobbie': '2',
                'name': 'Micro Controladores',
                'urlImage': 'https://lh3.googleusercontent.com/XRoYePUI1eKdneahqcb7z2e3bWOu76DJYZCQgjAd3F7_6T2C2Uuu5TDO6M2JMuoF7aNou12YY5aJrcDolXCiH1GuSNHcz-VRWttfxxfgDw8O_-Z8jYuUJrhO3QwqfFxcVoNDIuzshPTDduPpfdT0W7FyuvYsadwlHD6bGuqMro0MquvOWe5HQaFYZdNih4sGCTB7e4jXA_xSM6Gush1oZp2D84jGvzgYQB83LCfcU58UkAirwqEPg7jPeK4vl4w-laht5LVENiYHCEFi5EfsLM9nEHHOh87RclEQdJ1qndSRzlD5kCQKf9hRhENf0QlzxqJ0lYRbgJ6Zfx8SWMBy4-di1AmqImLMWbNOjZStcgIF37oSeu1EO6-S0g-yzcerG7tGcURRjWkkwHD8JViWnYlLvWjgL0UY6HeJ0IQhso_ZbPd7jXsy9nKZ28cOCVBcOKjYy_YZfaVEf5iUMkCzD7w2wrUlpp48jdRCgN2i5trePSNo-hfydtiSB5YcWYRMemNPlAGTI3mkW2AWYqe19_WKrHs72PHqqE_aqrB9VkJwlD1aU9cuVAtbCaV8THZ6r3SGuSnGjpcUATTucuOAEi4PsTImUIH0EOd0ojXyRLZYJ5w1OPPdGZosUEpQ7Bsxkzyr6foC0-HPmIWcdiZOd-0Sl2Y-ZzpCar9O37LTvZMfF5R2I-NK6MR1NVYX_Q=w833-h626-no',
                'imgGallery':[
                    {'titulo':'Auto Bluethood', 'descripcion':'Auto controlado por bluethood creado con arduino', 'img':'https://lh3.googleusercontent.com/XRoYePUI1eKdneahqcb7z2e3bWOu76DJYZCQgjAd3F7_6T2C2Uuu5TDO6M2JMuoF7aNou12YY5aJrcDolXCiH1GuSNHcz-VRWttfxxfgDw8O_-Z8jYuUJrhO3QwqfFxcVoNDIuzshPTDduPpfdT0W7FyuvYsadwlHD6bGuqMro0MquvOWe5HQaFYZdNih4sGCTB7e4jXA_xSM6Gush1oZp2D84jGvzgYQB83LCfcU58UkAirwqEPg7jPeK4vl4w-laht5LVENiYHCEFi5EfsLM9nEHHOh87RclEQdJ1qndSRzlD5kCQKf9hRhENf0QlzxqJ0lYRbgJ6Zfx8SWMBy4-di1AmqImLMWbNOjZStcgIF37oSeu1EO6-S0g-yzcerG7tGcURRjWkkwHD8JViWnYlLvWjgL0UY6HeJ0IQhso_ZbPd7jXsy9nKZ28cOCVBcOKjYy_YZfaVEf5iUMkCzD7w2wrUlpp48jdRCgN2i5trePSNo-hfydtiSB5YcWYRMemNPlAGTI3mkW2AWYqe19_WKrHs72PHqqE_aqrB9VkJwlD1aU9cuVAtbCaV8THZ6r3SGuSnGjpcUATTucuOAEi4PsTImUIH0EOd0ojXyRLZYJ5w1OPPdGZosUEpQ7Bsxkzyr6foC0-HPmIWcdiZOd-0Sl2Y-ZzpCar9O37LTvZMfF5R2I-NK6MR1NVYX_Q=w833-h626-no'},
                    {'titulo':'Control de luces', 'descripcion':'Aprendiendo a controlar luces con arduino', 'img':'https://lh3.googleusercontent.com/wekdN3QYkVd5b3yFd1BapceWJXd_aiir0rvHdH7XcKgeHmDZVf6-asD0pxWVQ1Imq55GkA47WFZ_bx978gbgedXpfRxQLJds8flwUF_TK-M1UD8mAcD92JPFXLDmx4lFW4Asc5GmbOLk8IwsaNn6xLang1ToSxcmME-Vz-Al_gvHW9QlDlUFxoXwR20YYAG6HlvxgKKZolYvgIgYeybq_52hVQFucuaWM73ymhrURiwWzcMDllIgMDvZExiTJU5-eNcpulRDPmsOYe-lIaau8SXxpTZsjhvjvoni7_jhgr1-w1fRm7Yifo_m3sUBHISjKgag2yc1cHeYj3CwJByrHp3izps8sMYhK9ZkNLf9aJ5WgPf2Bk_NsVH8GelYEBkgDx9ZGfsiV0e9IPVoX0ENuW63z8ZqrOYiiBETBanBC8BZ9_fHsLuTHPQUhjuWOXrwibRlK86PuFzwu4CB1DKTermqyuAmZVab3RZnzSZT6TYtu3osjkeGMbYkRYdf93swFV-5L9a-T203UW74LcfqDRkOQZGwGS_Aemwljg-FRXWovZ2IVfwLT172r_1YGGVYspFicpqZo8VI-UjsoJR3ZB8J1bQ9k5meVcAkWT7Jz1wUDtu_M6EuQx3WeXAX8mphJzRry5At6_8MABh37Dt_LgeK0GBIBZzkArvJ9u6PUOBW4aYkP7y-u7rtleh_yUo=w1258-h943-no'},
                ],
                'description': 'this is a description Hobbie',
                
            },
           
        ]
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
                    gallery={this.state.hobbieSelect.imgGallery}
                    
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