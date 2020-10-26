import React, { useState } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
export default function Login () {
   let [ phoneValue , setValue ] = useState('');
   let history = useHistory();
   function checkPhone (e){

      let phone = e.target.value;
      var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
      if(phone.length >= 11){
         //截断
         phone = phone.substring(0,11);
         if(phone){
            if (regex.test(phone)) {
               history.push('/vcode');
            } else {
               alert('请输入正确的手机号码！');
            }
         }
      }else{
         setValue(phone);
      }

   }

   return (
      <div>
         <h1>请输入手机号:</h1>
         <input className={ 'login-input' } placeholder='请输入手机号'
            value={ phoneValue } onChange={ checkPhone }></input>
      </div>
   );
}
