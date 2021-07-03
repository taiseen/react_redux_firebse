// 18-Jun-2021
const initState = { // 2 | store
    authError: null,
}

const authReducer = (state = initState, action) => { // 1

    switch (action.type) {

        case 'LOGIN_SUCCESS':
            console.log('login success ==>');
            return { ...state, authError: 'Login Success', };

        case 'LOGIN_ERROR':
            console.log('login error ==>');
            return { ...state, authError: 'Login Failed', };

        case 'SIGNOUT_SUCCESS':
            console.log('SignOut Success');
            return state;

        // new user create process...
        case 'SIGNUP_SUCCESS':
            console.log('SignUp Success! :)');
            return { ...state, authError: null };

        case 'SIGNUP_ERROR':
            console.log('SignUp Error :(');
            return { ...state, authError: action.err.message };

        default:
            return state;
    }
};

export default authReducer;