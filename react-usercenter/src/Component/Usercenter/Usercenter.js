import React, { useState } from 'react';
import './usercenter.css';
import UserInfo from '../UserInfo/UserInfo';
import Record from '../Record/Record';
export default function User () {

   let [ isTab,setIsTab ] = useState('user');
   function handleDemo (){
      switch (isTab) {
      case 'user':
         return (<UserInfo/>);
      case 'record':
         return(<Record/>);
      default:
         return null;
      }
   }
   return (
      <div className="user">
         <div className="tabs">
            <div className="tab" onClick={ ()=>{
               setIsTab('user');
            } }>
               <h1>个人信息</h1>
               {isTab === 'user' ? <div className="line"></div> : null}
            </div>
            <div className="tab" onClick={ ()=>{
               setIsTab('record');
            } }>
               <h1>兑换记录</h1>
               {isTab === 'record' ? <div className="line"></div> : null}
            </div>
         </div>

         <div className="card">
            {handleDemo()}
         </div>
      </div>
   );
}
