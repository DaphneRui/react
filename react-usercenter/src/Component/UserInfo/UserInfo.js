import React,{ useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './userInfo.css';

import { userList } from '../../Redux/Action/userInfo';
export default function UserInfo () {
   const dispatch = useDispatch();
   const user = useSelector(state=>state.userInfo.list);

   return (
      <div className="information">
         <img src={ user.avatar } alt="" className="info-avatar" />
         <div className="info-container">
            <span>姓名 :<p>{user.username}</p></span>
            <span>学校 :<p>{user.school}</p></span>
            <span>昵称 :<p>{user.nickname}</p></span>
            <span>性别 :{ user.gender === 1 ? <p>女</p> : <p>男</p>}</span>
            <span>密码 :<p>{ user.password }</p></span>
         </div>
      </div>
   );
}
