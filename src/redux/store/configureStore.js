import {createStore, applyMiddleware} from 'redux';
import reducer from '../../components/reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore(intialState){
    return createStore(reducer,
      applyMiddleware(logger, thunk, reduxImmutableStateInvariant())  
    );
}