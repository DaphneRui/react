import * as ActionType from '../../../Redux/ActionType';
import { record } from '../../../Request/record';

export function recordList (){

   return async (dispatch)=>{

      try {
         const { list } = await record();

         dispatch({ type: ActionType.SET_RECORD_LIST, data: { list } });

      } catch (error) {

         dispatch({ type: ActionType.SET_RECORD_LIST,data:{ message: error.message } });

      }

   };
}