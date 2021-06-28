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
            return console.log('projects ==> ', action.project);
        default:
            return state;
    }
};

export default projectReducer;