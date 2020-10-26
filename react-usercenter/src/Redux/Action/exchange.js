import * as ActionType from '../ActionType';
import { exchange } from '../../Request/exchange';
import { userInfo } from '../../Request/userInfo';

export function exchangeList (item){

   return async (dispatch)=>{

      try {
         await exchange({ id:item._id });
         const data = await userInfo();
         dispatch({ type: ActionType.SET_USER_INFO, data: data  });
      } catch (error) {
         dispatch({ type: ActionType.SET_USER_INFO,data:{ message: error.message } });

      }

   };
}