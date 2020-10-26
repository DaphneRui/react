import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import './record.css';

import { recordList } from './state/action';

export default function Record () {
   const dispatch = useDispatch();
   const record = useSelector(state=>state.recordList);
   useEffect(() => {
      dispatch(recordList());
   }, []);
   function renderRecord (){

      return _.map(record.list,(item)=>{

         return (
            <div className="record" key={ uuidv4() }>
               <img src={ item.image } alt="" />
               <p>{item.name}</p>
               <p>{moment(item.exchangeDate).format('YYYY-MM-DD HH:mm:ss')}</p>
            </div>

         );
      });
   }
   return (
      <div className="records" >
         {renderRecord()}
      </div>
   );
}
