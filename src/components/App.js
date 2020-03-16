import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Hobbies from '../pages/Hobbies'

export default function  App (props){

        return(
            
            <BrowserRouter>
                <Layout>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Profile/' component={Home}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/hobbies' component={Hobbies}/>
                    </Switch>
                    
                </Layout>
            </BrowserRouter>
           
           
        )
    
}

