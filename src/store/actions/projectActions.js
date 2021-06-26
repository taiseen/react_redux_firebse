export const createProject = (project) => {

    return (dispatch, getState) => {
        // make asynchronous call to DataBase 
        dispatch({
            type: 'CREATE_PROJECT',
            project
        });

    };
};