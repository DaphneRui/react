import * as ActionType from '../../../Redux/ActionType';

const initialState = { list:[] };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.SET_SHOP_MENU:

      return {
         ...state,
         list: payload.data.list
      };
   default:
      return state;
   }
};