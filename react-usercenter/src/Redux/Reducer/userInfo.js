import * as ActionType from '../ActionType';

const initialState = { list:{ } };

export default (state = initialState, payload) => {
   switch (payload.type) {
   case ActionType.SET_USER_INFO:
      return {
         ...state,
         list: payload.data
      };
   default:
      return state;
   }
};