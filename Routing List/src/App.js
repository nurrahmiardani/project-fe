import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Kategori from './components/Kategori'
import Menu from './components/Menu'


const Routes = () => {
    return (
      <div>
        <Router>
          <Kategori />
          <Switch>
                <Route exact path="/" element = {<Kategori />} />
                  <Route exact path="/Menu" element = {<Menu />} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
