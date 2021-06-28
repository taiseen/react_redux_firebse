// 26-Jun-2021
// Redux Middleware ==> Redux Thunk
// run between these 2 points -->
// 1) dispatch action & 2) reducer 

export const createProject = (project) => {

    // console.log(project)

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        // make asynchronous call for DataBase 

        dispatch({
            type: 'CREATE_PROJECT',
            project
        });
    };
};