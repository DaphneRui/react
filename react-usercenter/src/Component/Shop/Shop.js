import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import './shop.css';

import { userList } from '../../Redux/Action/userInfo';
import { exchangeList } from '../../Redux/Action/exchange';
import { shopList } from './state/action';

import recordImage from '../../Assets/record.png';

export default function Shop () {
   const dispatch = useDispatch();
   const user = useSelector(state=>state.userInfo.list);
   const menu = useSelector(state=>state.shopMenu);
   useEffect(() => {
      dispatch(userList());
      dispatch(shopList());
   }, []);

   function renderMenu (){

      return _.map(menu.list,(item)=>{

         return (

            <div className="shopInfo" key={ uuidv4() }>
               <img src={ item.image } alt="" className="image" />
               <p>{ item.name }</p>
               <div className="to-record">
                  <div className="icon">
                     <img src={ recordImage } alt="" />
                     { item.price }积分
                  </div>
                  <button onClick={ ()=>{
                     dispatch(exchangeList(item));
                  }
                  }>兑换</button>
               </div>
            </div>

         );
      });
   }

   return (
      <div className="shop">
         <div className="theme"><h2>商城</h2></div>
         <div className="score">
            <h2>当前积分</h2>
            <h1>{user.integration}</h1>
         </div>
         <div className="shopList">
            <h2>商品列表</h2>
            <div className="shop-card" >
               {renderMenu()}
            </div>

         </div>

      </div>
   );
}
