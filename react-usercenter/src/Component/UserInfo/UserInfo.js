import React,{ useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './userInfo.css';

import { userList } from '../../Redux/Action/userInfo';
export default function UserInfo () {
   const dispatch = useDispatch();
   const user = useSelector(state=>state.userInfo.list);
   let [ isGirl,setIsGirl ] = useState(true);
   useEffect(() => {
      dispatch(userList());
      if(user.gender === 1){
         setIsGirl(false);
      }
   }, []);

   return (
      <div className="information">
         <img src={ user.avatar } alt="" className="info-avatar" />
         <div className="info-container">
            <span>姓名 :<p>{user.username}</p></span>
            <span>学校 :<p>{user.school}</p></span>
            <span>昵称 :<p>{user.nickname}</p></span>
            <span>性别 :{ isGirl ? <p>女</p> : <p>男</p>}</span>
            <span>密码 :<p>{ user.password }</p></span>
         </div>
      </div>
   );
}
