import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {
   Link,
   useLocation,
} from 'react-router-dom';

import './sider.css';
import { userList } from '../../Redux/Action/userInfo';

export default function Sider () {
   const dispatch = useDispatch();
   const user = useSelector(state=>state.userInfo.list);
   let location = useLocation();

   useEffect(() => {
      dispatch(userList());
   }, []);

   return (
      <div className={ 'sider' }>
         <div className={ 'sider-right' }>
            <img src={ user.avatar } alt="" className={ 'avatar' } />
            <p>{user.nickname}</p>

            <Link to='/user/usercenter'>
               <div className={ 'sider-container' } style={{ backgroundColor : location.pathname === '/user/usercenter' ? '#3e3f85' : '' }} >
               个人中心
               </div>
            </Link>
            <Link to='/user/shop'>
               <div className={ 'sider-container' } style={{ backgroundColor : location.pathname === '/user/shop' ? '#3e3f85' : '' }} >
               积分商城
               </div>
            </Link>
            <div className={ 'sider-container' }>
            退出
            </div>
         </div>

      </div>
   );
}
