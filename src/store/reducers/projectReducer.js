// 18-Jun-2021
const initState = { // 2 | store

}
const projectReducer = (state = initState, action) => { // 1

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('projects ==> ', action.project, state)
            return { ...state, projects: action.project };
        case 'CREATE_PROJECT_ERROR':
            return console.log('projects error ==> ', action.err);
        default:
            return state;
    }
};

export default projectReducer;