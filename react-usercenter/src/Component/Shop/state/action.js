import * as ActionType from '../../../Redux/ActionType';
import { shopMenu } from '../../../Request/shopMenu';

export function shopList (){

   return async (dispatch)=>{

      try {
         const { list } = await shopMenu();

         dispatch({ type: ActionType.SET_SHOP_MENU, data: { list } });

      } catch (error) {

         dispatch({ type: ActionType.SET_SHOP_MENU,data:{ message: error.message } });

      }

   };
}