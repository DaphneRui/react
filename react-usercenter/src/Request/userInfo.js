import request from '../Common/request';
import { host } from '../Common/config';

export async function userInfo (){

   const result = await request({
      url:`${host}/user/userinfo`,
      method:  'get',
      data: {
         id: '5f9123827cac8518b1099c22'
      }
   });

   console.log(result);

   return result;
}