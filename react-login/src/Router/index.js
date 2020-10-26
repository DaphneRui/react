import React from 'react';
import Login from '../Feature/Login/Login';
import Vcode from '../Feature/Vcode/Vcode';
import Vcode2 from '../Feature/Vcode2/Vcode2';

export const routerConfig = [
   {
      path:'/login',
      component: Login
   },
   {
      path:'/vcode',
      component: Vcode
   },
   {
      path:'/vcode2',
      component: Vcode2
   },
   {
      path:'/',
      component: Login
   },
   {
      path:'*',
      component:()=>{
         return (
            <div>404</div>
         );
      }
   },
];