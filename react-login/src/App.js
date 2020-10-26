import React from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';

import './App.css';

import { routerConfig } from './Router/index';
import PrivateRoute from './Common/PrivateRoute';

function App () {

   function renderRouter (){

      return _.map(routerConfig,(item)=>{

         return (

            <PrivateRoute { ...item } key={ uuidv4() }/>
         );
      });
   }
   return (

      <Router>
         <div className="App">
            <Switch>
               { renderRouter()}
            </Switch>
         </div>
      </Router>
   );
}

export default App;

