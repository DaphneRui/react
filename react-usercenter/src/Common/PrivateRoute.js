import React from 'react';
import _ from 'lodash';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute ({ component: Component , ...rest }) {

   let user = localStorage.getItem('user');
   let isAuth = true;

   /* 不需要登陆验证的路由 */
   const noAuthNeedPaths = [ '/user/usercenter','/user/shop' ];

   // /* 跳转路由 */
   const redirectAddress = '/user/usercenter';

   /* 不需要登陆验证 */
   if(_.includes(noAuthNeedPaths,rest.path)){
      isAuth = true;
   }else{
      /* 如果已经登陆 */
      if(user){
         isAuth = true;
      }
   }

   return (
      <Route { ...rest } render={ ()=>{
         return (
            isAuth ? <Component/> : <Redirect to={ redirectAddress }></Redirect>
         );
      } } ></Route>

   );
}

PrivateRoute.propTypes = {
   component: PropTypes.func
};
