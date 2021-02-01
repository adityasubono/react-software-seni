export const userActions = (usernameR) =>{
    return{
        type: 'GET_REPO',
        payload: usernameR
    }
}