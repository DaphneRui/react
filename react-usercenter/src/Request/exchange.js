import request from '../Common/request';
import { host } from '../Common/config';

export async function exchange (data){

   const result = await request({
      url:`${host}/shop/exchange`,
      method:  'put',
      data
   });
   console.log('exchange',result);
   return result;
}