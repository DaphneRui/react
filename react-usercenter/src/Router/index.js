import React from 'react';
import Usercenter from '../Component/Usercenter/Usercenter';
import Shop from '../Component/Shop/Shop';
export const routerConfig = [
   {
      path:'/user/usercenter',
      component: Usercenter
   },
   {
      path:'/user/shop',
      component: Shop
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