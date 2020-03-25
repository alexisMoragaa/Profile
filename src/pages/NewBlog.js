import React from 'react'

import CKEditor from 'ckeditor4-react';
import $ from 'jquery'
import { BoxLoading } from 'react-loadingg';

import FormBlog from '../components/FormBlog'

class NewBlog extends React.Component{

    constructor(props){
        super(props)
        this.state = {
                loading:false,
                error:undefined,
                form:{

                    titleBlog:'',
                    imgBlog:'',
                    contentBlog : '',
                    idUser:'1'
                }
            
        }
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    
    handleEditor = value =>{ 
        this.setState({
            form:{
                ...this.state.form,
                ['contentBlog']:value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // await fetch(`http://localhost:8080/blog/get-form`, {method:'POST', body: JSON.stringify(this.state)})
        this.setState({loading:true});
        try{

            $.post('http://localhost:8080/blog/get-form',this.state.form, (response) => {
                // console.log(response);
                this.setState({loading:false});
    
                // alert("Funciono");
            } ).fail((error) => {
                this.setState({loading:false, error:error.responseJSON});     
            })
        }catch(error){
            this.setState({loading:false, error:error});
        }
        // alert('detenido')
    }

    render(){
        if(this.state.loading){
            return(

            <BoxLoading />
            )
        }
        return(
            <React.Fragment>

                <FormBlog
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    onChangeEditor={this.handleEditor}
                />


            </React.Fragment>

        )
    }

}
    
export default NewBlog    

