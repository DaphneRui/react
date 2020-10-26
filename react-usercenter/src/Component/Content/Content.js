import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import PrivateRoute from '../../Common/PrivateRoute';

import { routerConfig } from '../../Router/index';

export default function Content () {

   function renderRouter (){

      return _.map(routerConfig,(item)=>{

         return (

            <PrivateRoute { ...item } key={ uuidv4() }/>
         );
      });
   }

   return (
      <Switch>
         <Route path='/user' exact render={ ()=> (
            <Redirect to='/user/usercenter'/>
         ) }/>
         { renderRouter() }
      </Switch>
   );
}
