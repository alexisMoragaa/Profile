(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{43:function(e,a,t){e.exports=t(58)},48:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(9),c=t.n(o);t(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(49);var r=t(18),s=t.n(r),i=(t(50),t(65)),m=t(67),u=t(66),d=t(62),b=t(14),h=t(15);function p(){return l.a.createElement("nav",{id:"sidebar"},l.a.createElement("div",{className:"custom-menu"},l.a.createElement("button",{type:"button",id:"sidebarCollapse",className:"btn btn-primary"},l.a.createElement("i",null," ",l.a.createElement(b.a,{icon:h.a})," "),l.a.createElement("span",{className:"sr-only"},"Toggle Menu"))),l.a.createElement("div",{className:"p-4"},l.a.createElement("h1",null,l.a.createElement(d.a,{to:"/",className:"logo"},"Amoraga ",l.a.createElement("span",null,"Website"))),l.a.createElement("ul",{className:"list-unstyled components mb-5"},l.a.createElement("li",{className:"active"},l.a.createElement(d.a,{to:"/home"},l.a.createElement(b.a,{icon:h.c,className:"mr-3"})," Home")),l.a.createElement("li",{className:"activeLink"},l.a.createElement(d.a,{to:"/hobbies"},l.a.createElement(b.a,{icon:h.g,className:"mr-3"})," Hobbies")),l.a.createElement("li",{className:"activeLink"},l.a.createElement(d.a,{to:"/"},l.a.createElement(b.a,{icon:h.h,className:"mr-3"})," Formaci\xf3n")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/"},l.a.createElement(b.a,{icon:h.e,className:"mr-3"})," Trabajo")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/"},l.a.createElement(b.a,{icon:h.f,className:"mr-3"})," Gallery")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/"},l.a.createElement(b.a,{icon:h.b,className:"mr-3"})," Services")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/"},l.a.createElement(b.a,{icon:h.d,className:"mr-3"})," Contacts"))),l.a.createElement("div",{className:"footer"},l.a.createElement("p",null))))}t(56);function E(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"wrapper d-flex align-items-stretch"},l.a.createElement(p,null),l.a.createElement("div",{id:"content",class:"p-4 p-md-5 pt-5"},e.children)))}var g=t(21),f=t(22),v=t(29),Z=t(23),j=t(30),w=t(19),y=t.n(w),H=function(e){function a(){return Object(g.a)(this,a),Object(v.a)(this,Object(Z.a)(a).apply(this,arguments))}return Object(j.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement("h1",null,"Hola, mi nombre Alexis \u270b. ",l.a.createElement("br",null),l.a.createElement("span",{className:"mr-2"})," Soy  ",l.a.createElement("span",null,"  "),l.a.createElement(y.a,{className:"text-warning bold",strings:["Desarrollador Web","Trabajo en Backend","y","Frontend"],typeSpeed:70,backSpeed:40})),l.a.createElement("h5",null,l.a.createElement(y.a,{strings:[" Durante estas semanas estare construyendo un sitio basado en lo que aprendi en el curso de react en platzi \u270a"],startDelay:10500,typeSpeed:50,backSpeed:100})))}}]),a}(l.a.Component);function O(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card",onClick:e.search,id:e.hobbie.idHobbie},l.a.createElement("img",{src:e.hobbie.urlImage,class:"card-img-top",alt:"...",id:e.hobbie.idHobbie}),l.a.createElement("div",{class:"card-body",id:e.hobbie.idHobbie},l.a.createElement("h5",{className:"cardTitle"},e.hobbie.name),l.a.createElement("p",{class:"card-text"},e.hobbie.description))))}var I=t(64),N=t(63);function C(e){return!1===e.isOpen?null:c.a.createPortal(l.a.createElement(N.a,{show:e.isOpen,onHide:e.onClose,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(N.a.Body,null,e.children)),document.getElementById("portalModal"))}function P(e){return e.gallery.map((function(e){return console.log(e.img)})),l.a.createElement(C,{isOpen:e.isOpen,onClose:e.onClose},l.a.createElement(I.a,null,e.gallery.map((function(e){return l.a.createElement(I.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide"}),l.a.createElement(I.a.Caption,null,l.a.createElement("h3",null,e.titulo),l.a.createElement("p",null,e.descripcion)))}))),l.a.createElement("h5",{className:"cardTitle"},e.hobbie.name),l.a.createElement("p",{class:"card-text"},e.hobbie.description))}var M,Y=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(v.a)(this,(e=Object(Z.a)(a)).call.apply(e,[this].concat(l)))).state={modalIsOpen:!1,hobbieSelect:{imgGallery:[{}]},hobbies:[{idHobbie:"1",name:"Cross Country",urlImage:"https://lh3.googleusercontent.com/qYJF480dJZ2TG3j1uY9dP2nKpDscLKyjFebGIl4Cns5PJ_FGkEhC5q9XUqhdNRbt0jepnWHebe_y-80i0h3Yzt1bl3QvP0zjcvnMzwkeC2I0DCO9hsxO-UDm5gZF-lGQ1bXjWPJDIk7vHCefJL7K9coq6I4uORj2CccLmy3ovOi-C3ZN0CjMeM2ypV5ISGb4A0F2xVCtZSeZ55dt0pj10wxjwAYW52RC49gVGMusKcv4pCBO3FxdT9sX2tNolBpkneGDYciahvnJl7AQbTvIjrxUl1eQGi91aYyf4o172IMb_z3JHZtRAhQNH8yuD2QFZrKOvlyP84lJM7TGDI3Z30M08Z5b6ROPno_Hn_53MuLO4hA-Pm56yFcmrsgzAs1fPZyMhscBb33NM305HZtgaYaovwI7B8baZl_8bsYR81hD9GRATSEQ1CF9x2-2psvvDCKkdWd93vAlg4Cr2LT_4PTnxFWIZxUIe6Z2lF35LdDVSUqTQTffAI1x6ZSXQvmGasqZzvEFgo0tWrcjrIhiTUvxVpw2lniyIwzyZuz2kbKodOcHAH0uXm1RgB_cLIyS0Wb2_KPj3wDNtxNZlQuPHgeNO_WkfEQwxoJP-P2vpcfyTgJyZHmZOV8Pyo11DwNmvG7NOzdweZlozfjp8fXliUmZkzjxsmZWAKWpjqssGk-Rmhy8-CrITeXvmgaVgSEvnT87CXR05ryraxubJfuoTHZV-t3BwavcI86wrrsQfbVV6cxBRUmlMF7v=w833-h626-no",imgGallery:[{titulo:"Zapatillas con Fijaci\xf3n",descripcion:"Estas son mis zapatillas con fijaci\xf3n",img:"https://lh3.googleusercontent.com/qYJF480dJZ2TG3j1uY9dP2nKpDscLKyjFebGIl4Cns5PJ_FGkEhC5q9XUqhdNRbt0jepnWHebe_y-80i0h3Yzt1bl3QvP0zjcvnMzwkeC2I0DCO9hsxO-UDm5gZF-lGQ1bXjWPJDIk7vHCefJL7K9coq6I4uORj2CccLmy3ovOi-C3ZN0CjMeM2ypV5ISGb4A0F2xVCtZSeZ55dt0pj10wxjwAYW52RC49gVGMusKcv4pCBO3FxdT9sX2tNolBpkneGDYciahvnJl7AQbTvIjrxUl1eQGi91aYyf4o172IMb_z3JHZtRAhQNH8yuD2QFZrKOvlyP84lJM7TGDI3Z30M08Z5b6ROPno_Hn_53MuLO4hA-Pm56yFcmrsgzAs1fPZyMhscBb33NM305HZtgaYaovwI7B8baZl_8bsYR81hD9GRATSEQ1CF9x2-2psvvDCKkdWd93vAlg4Cr2LT_4PTnxFWIZxUIe6Z2lF35LdDVSUqTQTffAI1x6ZSXQvmGasqZzvEFgo0tWrcjrIhiTUvxVpw2lniyIwzyZuz2kbKodOcHAH0uXm1RgB_cLIyS0Wb2_KPj3wDNtxNZlQuPHgeNO_WkfEQwxoJP-P2vpcfyTgJyZHmZOV8Pyo11DwNmvG7NOzdweZlozfjp8fXliUmZkzjxsmZWAKWpjqssGk-Rmhy8-CrITeXvmgaVgSEvnT87CXR05ryraxubJfuoTHZV-t3BwavcI86wrrsQfbVV6cxBRUmlMF7v=w833-h626-no"},{titulo:"Plaza Antilen",descripcion:"Plaza ubicada en el cerro san cristobal",img:"https://lh3.googleusercontent.com/aGnyeAQcY1nSsctavmnamFWGvVHgXrk1WY01raFgyBUs4O35egmnihR3o3HIYs3OkuLGNyTYFK20ysaIwjGLErESJBYUIGjPDo91oG-IhrtevPfP7hsGCZFxSQSp2bJH9pKtNG9B4zzpd2hHuSkSBH1okoTsepe7jNAXoGtf9djY5pDUjE9yXZofHbiOduSt8sw3WqW0W-AR0DnIZ6C1HMLbpmV7uU03kl2U9ghflM3cD4dnTn0-Ioc1Jxmjefx7_M_jHIITMVAbsC9gPupXg4j30DEbeGQyTeMSIEeP_I_OgGcHySa2aAQaP2zFj6aKZxaOWwM82_6oyix41fkce7qGZDjZTmRzp011sLkjr1CfDCgJf_u--VvMW6FHvWrsAUXRirpxJUE75usxF1GgrJTVIQP5owMRfzL2PAKlO5UhRiVE_pxJP2n-05fY-reFlKAHugDi3DgiGT479GsHZf5btEcyqQzf2dM9V7hNuhmnNasP63S3sgz3_mKEY0a0mLpCdZbDWoZVwr8kNSxFZSwfNRSQ_OjU5v6wW2PTdyLFnK2BVzAClSSxsAsbPkOo-CJ-GWFg5e5IR1kr0jJVdxGRfig6XNH33zHlRfelzp5EU6Ozotb446jBg_sSKp0flUW95dUXMbuKgopPJAmk2MTwUie-D0jbcDyTB2515b9lUwoUokA_Io4AaDf-M_M=w1258-h943-no"},{titulo:"Cerro san Cristobal",descripcion:"Senderos del cerro san cristobal",img:"https://lh3.googleusercontent.com/4HNs6nBMMPLvLwMI5wMeyiMgl0A0J0sndkG6E6RJiHhoObk0AhWGHP0ReYdMBhSIVKecCkc14FZ0vTil2jwzmvfZ5223KPW5s3oPdKF_-4j2Kch8Qd-htEdqcR66zJxCBcHJW74YxFPMEMOt_xMMKd90CL1hYcMigPzT4JvYeIrYi2KF9Nfrtz6TjVfO1tbPDLYoUERIiHbkI13fSVw54MWKGbkWebVZrRC8YESPsD24wvCCCqhDDJSfMxDReQT23RGG66whijL48frLdHWofsdH5OYwTSBwf4dPD6EV5vo5I0yWiuEakBrNlPAP85Y9M4c0vwooeSmjsc1PiV9l0Tuv-nrEiRvZ5_kx1rxae_a1-aX5ANBjrL4EVFv6CREoNUjOjU_5JN0o5i3yf7g5t3cqs_dlQjbt1RGE7Q_8bPmrXhsODyw0NxI1ayunTrfGlGyBfrhzJknQM0HMid4dZtny3c_as2e3L-YHFl9fi9n2xojD1dnpAhRwjEua5F9OGez-La_3ccmXVjm7K9NWZ1hh9HxtdOViHNRAAXsSeh7LWV54dYa6hnm6_axb5Ea0jDwdujKGDkmZt9TelCN87S3ngS4JHPMH7rXsQKIDnvf2vFIkFkBmlWAQSmzHaDXq98zfrprBZ5WemPENpf20Tr7JvFxN14hAtaOkQ7TNIwlqt98OwrBQ91Etcs90Fw=w1258-h943-no"}],description:"this is a description Hobbie"},{idHobbie:"2",name:"Micro Controladores",urlImage:"https://lh3.googleusercontent.com/XRoYePUI1eKdneahqcb7z2e3bWOu76DJYZCQgjAd3F7_6T2C2Uuu5TDO6M2JMuoF7aNou12YY5aJrcDolXCiH1GuSNHcz-VRWttfxxfgDw8O_-Z8jYuUJrhO3QwqfFxcVoNDIuzshPTDduPpfdT0W7FyuvYsadwlHD6bGuqMro0MquvOWe5HQaFYZdNih4sGCTB7e4jXA_xSM6Gush1oZp2D84jGvzgYQB83LCfcU58UkAirwqEPg7jPeK4vl4w-laht5LVENiYHCEFi5EfsLM9nEHHOh87RclEQdJ1qndSRzlD5kCQKf9hRhENf0QlzxqJ0lYRbgJ6Zfx8SWMBy4-di1AmqImLMWbNOjZStcgIF37oSeu1EO6-S0g-yzcerG7tGcURRjWkkwHD8JViWnYlLvWjgL0UY6HeJ0IQhso_ZbPd7jXsy9nKZ28cOCVBcOKjYy_YZfaVEf5iUMkCzD7w2wrUlpp48jdRCgN2i5trePSNo-hfydtiSB5YcWYRMemNPlAGTI3mkW2AWYqe19_WKrHs72PHqqE_aqrB9VkJwlD1aU9cuVAtbCaV8THZ6r3SGuSnGjpcUATTucuOAEi4PsTImUIH0EOd0ojXyRLZYJ5w1OPPdGZosUEpQ7Bsxkzyr6foC0-HPmIWcdiZOd-0Sl2Y-ZzpCar9O37LTvZMfF5R2I-NK6MR1NVYX_Q=w833-h626-no",imgGallery:[{titulo:"Auto Bluethood",descripcion:"Auto controlado por bluethood creado con arduino",img:"https://lh3.googleusercontent.com/XRoYePUI1eKdneahqcb7z2e3bWOu76DJYZCQgjAd3F7_6T2C2Uuu5TDO6M2JMuoF7aNou12YY5aJrcDolXCiH1GuSNHcz-VRWttfxxfgDw8O_-Z8jYuUJrhO3QwqfFxcVoNDIuzshPTDduPpfdT0W7FyuvYsadwlHD6bGuqMro0MquvOWe5HQaFYZdNih4sGCTB7e4jXA_xSM6Gush1oZp2D84jGvzgYQB83LCfcU58UkAirwqEPg7jPeK4vl4w-laht5LVENiYHCEFi5EfsLM9nEHHOh87RclEQdJ1qndSRzlD5kCQKf9hRhENf0QlzxqJ0lYRbgJ6Zfx8SWMBy4-di1AmqImLMWbNOjZStcgIF37oSeu1EO6-S0g-yzcerG7tGcURRjWkkwHD8JViWnYlLvWjgL0UY6HeJ0IQhso_ZbPd7jXsy9nKZ28cOCVBcOKjYy_YZfaVEf5iUMkCzD7w2wrUlpp48jdRCgN2i5trePSNo-hfydtiSB5YcWYRMemNPlAGTI3mkW2AWYqe19_WKrHs72PHqqE_aqrB9VkJwlD1aU9cuVAtbCaV8THZ6r3SGuSnGjpcUATTucuOAEi4PsTImUIH0EOd0ojXyRLZYJ5w1OPPdGZosUEpQ7Bsxkzyr6foC0-HPmIWcdiZOd-0Sl2Y-ZzpCar9O37LTvZMfF5R2I-NK6MR1NVYX_Q=w833-h626-no"},{titulo:"Control de luces",descripcion:"Aprendiendo a controlar luces con arduino",img:"https://lh3.googleusercontent.com/wekdN3QYkVd5b3yFd1BapceWJXd_aiir0rvHdH7XcKgeHmDZVf6-asD0pxWVQ1Imq55GkA47WFZ_bx978gbgedXpfRxQLJds8flwUF_TK-M1UD8mAcD92JPFXLDmx4lFW4Asc5GmbOLk8IwsaNn6xLang1ToSxcmME-Vz-Al_gvHW9QlDlUFxoXwR20YYAG6HlvxgKKZolYvgIgYeybq_52hVQFucuaWM73ymhrURiwWzcMDllIgMDvZExiTJU5-eNcpulRDPmsOYe-lIaau8SXxpTZsjhvjvoni7_jhgr1-w1fRm7Yifo_m3sUBHISjKgag2yc1cHeYj3CwJByrHp3izps8sMYhK9ZkNLf9aJ5WgPf2Bk_NsVH8GelYEBkgDx9ZGfsiV0e9IPVoX0ENuW63z8ZqrOYiiBETBanBC8BZ9_fHsLuTHPQUhjuWOXrwibRlK86PuFzwu4CB1DKTermqyuAmZVab3RZnzSZT6TYtu3osjkeGMbYkRYdf93swFV-5L9a-T203UW74LcfqDRkOQZGwGS_Aemwljg-FRXWovZ2IVfwLT172r_1YGGVYspFicpqZo8VI-UjsoJR3ZB8J1bQ9k5meVcAkWT7Jz1wUDtu_M6EuQx3WeXAX8mphJzRry5At6_8MABh37Dt_LgeK0GBIBZzkArvJ9u6PUOBW4aYkP7y-u7rtleh_yUo=w1258-h943-no"}],description:"this is a description Hobbie"}]},t.openModal=function(){t.setState({modalIsOpen:!0})},t.closeModal=function(){t.setState({modalIsOpen:!1})},t.search=function(e){console.log(e.target.id);var a=t.state.hobbies.filter((function(a){return"".concat(a.idHobbie).includes(e.target.id)}));t.setState({hobbieSelect:a[0],modalIsOpen:!0})},t.getHobbies=function(){t.setState({hobbies:[]})},t}return Object(j.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{isOpen:this.state.modalIsOpen,onClose:this.closeModal,hobbie:this.state.hobbieSelect,gallery:this.state.hobbieSelect.imgGallery}),l.a.createElement("h1",null,l.a.createElement(y.a,{className:"text-warning bold",strings:["Algunos de mis hobbies"],typeSpeed:70,backSpeed:40})),l.a.createElement("div",{className:"row mt-5"},this.state.hobbies.map((function(a){return l.a.createElement("div",{className:"mt-1 col-sm-12 col-md-6 col-lg-3",key:a.idHobbie},l.a.createElement(O,{hobbie:a,onOpen:e.openModal,onClose:e.closeModal,search:e.search,modalIsOpen:e.state.modalIsOpen}))}))))}}]),a}(l.a.Component);c.a.render(l.a.createElement((function(e){return l.a.createElement(i.a,null,l.a.createElement(E,null,l.a.createElement(m.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:H}),l.a.createElement(u.a,{exact:!0,path:"/Profile/",component:H}),l.a.createElement(u.a,{exact:!0,path:"/home",component:H}),l.a.createElement(u.a,{exact:!0,path:"/hobbies",component:Y}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),(M=s.a)(".js-fullheight").css("height",M(window).height()),M(window).resize((function(){M(".js-fullheight").css("height",M(window).height())})),M("#sidebarCollapse").on("click",(function(){M("#sidebar").toggleClass("active")}))}},[[43,1,2]]]);
//# sourceMappingURL=main.0eb1ab18.chunk.js.map