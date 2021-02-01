const INITIAL_STATE = {
    username:''
}

export default(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'GET_REPO':
            return {...state, ...action.payload}
        default:
            return state
    }
}