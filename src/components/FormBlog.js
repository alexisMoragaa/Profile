import React from 'react';
import CKEditor from 'ckeditor4-react';

export default function FormBlog(props){
    return(




            <React.Fragment>
            <div className="col-md-12">

                <form onSubmit={props.onSubmit} id="formulario" >

                    
                        <label htmlFor="titlePost">Img Post</label>
                        <input className="" type="file" name="imgBlog" id="" value={props.form.imgPost}  onChange={props.onChange} />
                    
                    <div className="form-group">
                        <label htmlFor="titlePost">Titulo Post</label>
                        <input className="form-control" type="text" name="titleBlog" id="" value={props.form.titlePost} onChange={props.onChange} />
                    </div>

                    <input type="hidden" name="idUser" id="idUser" value={props.form.idUser}/>
                    
                    <CKEditor 
                        data={props.form.contentpost}
                        onChange={evt => props.onChangeEditor( evt.editor.getData() )}
                        config={
                            {
                                

                            }
                        }
                    /> 
                    <button className="btn btn-primary">Crear Post</button>
                </form>
                </div>
                {JSON.stringify(props.form)}
            </React.Fragment>


    )
}