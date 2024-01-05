const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;

const logger = reduxLogger.createLogger();



const initialState = {
    loading: false,
    user:[],
    error:''
}

//actions
const FETCH_USERS_REQUESTS = 'FETCH_USERS_REQUESTS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTS
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
//Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTS:
         return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS:
         return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE:
         return {
            ...state,
            loading: false,
            users:[],
            error: payload.error
        }
        default: return state
    }
}

//async action
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest()) //sync action
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users)) //sync actions
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error)) //sync actions
            })
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{})
store.dispatch(fetchUsers())
//unsubscribe()