import React from 'react';
import {
   Switch,
   Route,
   Redirect
} from 'react-router-dom';
import Sider  from '../../Component/Sider/Sider';
import Content from '../../Component/Content/Content';
export default function usercenter () {

   return (
      <Switch>
         <Route path='/user'>
            <Sider></Sider>
            <div className={ 'content' }>
               <Content></Content>
            </div>
         </Route>
         <Route path='/' exact render={ ()=> (
            <Redirect to='/user'/>
         ) }/>
         <Route path='*'>
            <div>404</div>
         </Route>

      </Switch>

   );
}
