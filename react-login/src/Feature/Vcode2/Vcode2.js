import React, { useState,useEffect,useRef } from 'react';
import './vcode2.css';
export default function Vcode2 () {

   const [ code, setCode ] = useState('');

   const inputRef = useRef();
   useEffect(()=>{
      inputRef.current.focus();
   },[]);

   function handleDel (e){
      if( e.keyCode === 8 ){
         document.getElementsByClassName('vcode-print')[0].style.display = 'none';
         setCode(code.slice(0,code.length));
      }
   }
   function print (){
      document.getElementsByClassName('vcode-print')[0].style.display = 'block';
   }

   function reset (){
      setTimeout(() => {
         setCode('');
         document.getElementsByClassName('vcode-print')[0].style.display = 'none';
         inputRef.current.value = '';
         inputRef.current.focus();
      },1000);
   }

   return (
      <div className={ 'vcode' }>
         <h1>请输入验证码:</h1>
         <div className={ 'vcode-renders' }>
            <div className={ 'vcode-render' }>{code.slice(0,1)}</div>
            <div className={ 'vcode-render' }>{code.slice(1,2)}</div>
            <div className={ 'vcode-render' }>{code.slice(2,3)}</div>
            <div className={ 'vcode-render' }>{code.slice(3,4)}</div>
         </div>

         <div className={ 'vcode-buttons' }>
            <button onClick={ print } className={ 'printButton' }>print</button>
            <button onClick={ reset }>reset</button>
         </div>

         <div className={ 'vcode-print' }>
            <h2>验证码: { code }</h2>
         </div>

         <input className={ 'vcode-input2' }  maxLength={ '4' } ref={ inputRef } value={ code }
            onChange={ (e)=>{
               setCode(e.target.value);
            } }
            onKeyDown={ (e)=>{
               handleDel(e);
            } }
         ></input>

      </div>
   );
}
