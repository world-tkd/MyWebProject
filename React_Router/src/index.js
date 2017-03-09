
import React from 'react'
import {render} from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'
import Home from './components/Home'
import Repo from './components/Repo'
import Ome from './components/Ome'

render((
    <Router history= {hashHistory}>
        <Route path= "/" component= {App}>
            <IndexRoute component= {Home}/>
            <Route path= '/about' component= {About}/>
            <Route path= '/repos' component= {Repos}>
                <IndexRoute component= {Ome}/>
                <Route path="/repos/:username/:repoName" component= {Repo}/>
            </Route>
        </Route>
    </Router>
),document.getElementById('app'))




















