// const redux = require('redux');
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const reduxLogger = require('redux-logger');
// const axios = require('axios');
// const thunkMiddleware = require('redux-thunk').default;

// const logger = reduxLogger.createLogger();



// const initialState = {
//     loading: false,
//     user:[],
//     error:''
// }

// //actions
// const FETCH_USERS_REQUESTS = 'FETCH_USERS_REQUESTS'
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
// const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// const fetchUsersRequest = () => {
//     return {
//         type: FETCH_USERS_REQUESTS
//     }
// }
// const fetchUsersSuccess = (users) => {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         payload: users
//     }
// }
// const fetchUsersFailure = (error) => {
//     return {
//         type: FETCH_USERS_FAILURE,
//         payload: error
//     }
// }
// //Reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case FETCH_USERS_REQUESTS:
//          return {
//             ...state,
//             loading: true
//         }
//         case FETCH_USERS_SUCCESS:
//          return {
//             ...state,
//             loading: false,
//             users: action.payload,
//             error: ''
//         }
//         case FETCH_USERS_FAILURE:
//          return {
//             ...state,
//             loading: false,
//             users:[],
//             error: payload.error
//         }
//         default: return state
//     }
// }

// //async action
// const fetchUsers = () => {
//     return function(dispatch){
//         dispatch(fetchUsersRequest()) //sync action
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 const users = response.data
//                 dispatch(fetchUsersSuccess(users)) //sync actions
//             })
//             .catch(error => {
//                 dispatch(fetchUsersFailure(error)) //sync actions
//             })
//     }
// }


// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// store.subscribe(()=>{})
// store.dispatch(fetchUsers())
// //unsubscribe()

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios')

const initialState = {
   loading: false,
   users: [],
   error:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUserRequest = () => {
    return {
        type:FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess = (users) => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
const fetchUserFailure = (error) => {
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading:false,
                users:[],
                error:action.payload
            }
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('http://jsonplaceholder.typicode.com/usersaaa')
                .then(response => {
                    const users = response.data.map(user => user.name)
                    dispatch(fetchUserSuccess(users))
                }).catch(error => {
                    dispatch(fetchUserFailure(error.message))
                })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
const unsubscribe = store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
// unsubscribe()