import request from '../Common/request';
import { host } from '../Common/config';

export async function record (){

   const result = await request({
      url:`${host}/shop/exchangedRecord`,
      method:  'get',
      data: {
         id: '5f9123827cac8518b1099c22'
      }
   });

   return result;
}