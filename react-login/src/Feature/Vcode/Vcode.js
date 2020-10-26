import React, { useState,useEffect,useRef } from 'react';
import './vcode.css';
import _ from 'lodash';
export default function Vcode () {

   const [ code, setCode ] = useState([ { codeA: '' },{ codeB: '' },{ codeC: '' },{ codeD: '' } ]);
   const [ printCode, setPrintCode ] = useState('');

   const inputRef = useRef([]);
   useEffect(()=>{
      inputRef.current[0].focus();
   },[]);

   function handleInputValue (e,index){
      const value = e.target.value;
      let cloneCode = _.cloneDeep(code);
      if(value){
         if(index !== 3){
            inputRef.current[index + 1].focus();
         }else{
            inputRef.current[index].focus();
         }
      }
      cloneCode[index] = inputRef.current[index].value;
      setCode(cloneCode);
   }

   function handleDel (e,index){
      if(index !== 0 && e.keyCode === 8 && e.target.value.length === 0){
         inputRef.current[index - 1].focus();
      }
   }

   function print (){
      setPrintCode(_.join(code, ''));
      document.getElementsByClassName('vcode-print')[0].style.display = 'block';
   }

   function reset (){
      setTimeout(() => {
         setCode([]);
         document.getElementsByClassName('vcode-print')[0].style.display = 'none';
         inputRef.current[0].value = '';
         inputRef.current[1].value = '';
         inputRef.current[2].value = '';
         inputRef.current[3].value = '';
      },1000);
   }

   return (
      <div className={ 'vcode' }>
         <h1>请输入验证码:</h1>
         <div className={ 'vcode-inputs' }>
            <input className={ 'vcode-input' } maxLength={ '1' } value={ code.codeA }
               ref={ (el)=>{ inputRef.current[0] = el; } }
               onChange={ (e)=>{
                  handleInputValue(e,0);
               } }
               onKeyDown={ (e)=>{
                  handleDel(e,0);
               } }
            ></input>

            <input className={ 'vcode-input' } maxLength={ '1' } value={ code.codeB }
               ref={ (el)=>{ inputRef.current[1] = el; } }
               onChange={ (e)=>{
                  handleInputValue(e,1);
               } }
               onKeyDown={ (e)=>{
                  handleDel(e,1);
               } }
            ></input>

            <input className={ 'vcode-input' } maxLength={ '1' } value={ code.codeC }
               ref={ (el)=>{ inputRef.current[2] = el; } }
               onChange={ (e)=>{
                  handleInputValue(e,2);
               } }
               onKeyDown={ (e)=>{
                  handleDel(e,2);
               } }
            ></input>

            <input className={ 'vcode-input' } maxLength={ '1' } value={ code.codeD }
               ref={ (el)=>{ inputRef.current[3] = el; } }
               onChange={ (e)=>{
                  handleInputValue(e,3);
               } }
               onKeyDown={ (e)=>{
                  handleDel(e,3);
               } }
            ></input>
         </div>

         <div className={ 'vcode-buttons' }>
            <button onClick={ print }>print</button>
            <button onClick={ reset }>reset</button>
         </div>

         <div className={ 'vcode-print' }>
            <h2>验证码: { printCode }</h2>
         </div>

      </div>
   );
}
