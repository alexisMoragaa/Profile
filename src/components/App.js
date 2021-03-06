import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Hobbies from '../pages/Hobbies'
import NewBlog from '../pages/NewBlog'

export default function  App (props){

        return(
            
            <BrowserRouter>
                <Layout>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Profile/' component={Home}/>
                        <Route exact path='/Profile/Home' component={Home}/>
                        <Route exact path='/Profile/Hobbies' component={Hobbies}/>
                        <Route exact path='/Profile/Blog/New' component={NewBlog}/>
                    </Switch>
                    
                </Layout>
            </BrowserRouter>
           
           
        )
    
}

