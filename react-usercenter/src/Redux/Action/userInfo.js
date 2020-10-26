import * as ActionType from '../ActionType';
import { userInfo } from '../../Request/userInfo';

export function userList (){

   return async (dispatch)=>{

      try {
         const data = await userInfo();
         dispatch({ type: ActionType.SET_USER_INFO, data: data  });

      } catch (error) {

         dispatch({ type: ActionType.SET_USER_INFO,data:{ message: error.message } });

      }

   };
}