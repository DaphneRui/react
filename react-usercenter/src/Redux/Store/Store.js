import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/index';

export function configStore (){
   const middlewares = [ thunk ];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [ middlewareEnhancer ];

   const composedEnhancers = composeWithDevTools(...enhancers);

   const store = createStore(rootReducer,composedEnhancers);

   return store;
}
