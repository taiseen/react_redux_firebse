// 18-Jun-2021
const initState = { // 2 | store
    authError: null,
}

const authReducer = (state = initState, action) => { // 1

    switch (action.type) {

        case 'LOGIN_SUCCESS':
            console.log('login success ==>');
            return {
                ...state,
                authError: null,
            };


        case 'LOGIN_ERROR':
            console.log('login error ==>');
            return {
                ...state,
                authError: 'Login Failed',
            };

        default:
            return state;
    }
};

export default authReducer;