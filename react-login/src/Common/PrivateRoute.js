import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute ({ component: Component , ...rest }) {
   // localStorage.setItem('user','isen');
   let user = localStorage.getItem('user');
   let auth = false;

   if(user){
      auth = true;
   }

   if(rest.path === '/login'){
      auth = true;
   }

   return (
      <Route { ...rest } render={ ()=>{
         return (
            auth ? <Component/> : <Redirect to='/login'></Redirect>
         );
      } } ></Route>

   );
}

PrivateRoute.propTypes = {
   component: PropTypes.func
};
