import React, { useState } from 'react';
import './usercenter.css';
import UserInfo from '../UserInfo/UserInfo';
import Record from '../Record/Record';
export default function User () {
   let [ isUser,setIsUser ] = useState(true);
   let [ isRecord,setIsRecord ] = useState(false);

   return (
      <div className="user">
         <div className="tabs">
            <div className="tab" onClick={ ()=>{
               setIsUser(true);
               setIsRecord(false);
            } }>
               <h1>个人信息</h1>
               {isUser ? <div className="line"></div> : null}
            </div>
            <div className="tab" onClick={ ()=>{
               setIsRecord(true);
               setIsUser(false);
            } }>
               <h1>兑换记录</h1>
               {isRecord ? <div className="line"></div> : null}
            </div>
         </div>

         <div className="card">
            {isUser ? <UserInfo/> : <Record/>}
         </div>
      </div>
   );
}
