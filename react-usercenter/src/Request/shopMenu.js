import request from '../Common/request';
import { host } from '../Common/config';

export async function shopMenu (){

   const result = await request({
      url:     `${host}/shop/shopList`,
      method:  'get'
   });
   console.log(result);
   return result;
}