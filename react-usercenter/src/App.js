import React from 'react';
import {
   BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';
import Usercenter from './Feature/User/user';
function App () {

   return (
      <Router>
         <div className={ 'App' }>
            <Usercenter/>
         </div>
      </Router>
   );
}

export default App;

