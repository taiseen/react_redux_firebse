// 18-Jun-2021
const initState = { // 2 | store
    projects: [
        { id: '1', title: 'react', content: 'learning react' },
        { id: '2', title: 'context api', content: 'context api is awesome' },
        { id: '3', title: 'redux', content: 'react-redux reducer is very cool' },
    ]
}
const projectReducer = (state = initState, action) => { // 1

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('projects ==> ', action.project);
            return { ...state, projects: action.project };
        case 'CREATE_PROJECT_ERROR':
            
            return console.log('projects error ==> ', action.err);;
        default:
            console.log('default ==> ', state);
            return state;
    }
};

export default projectReducer;