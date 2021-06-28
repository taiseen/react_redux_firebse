// 26-Jun-2021
// Redux Middleware ==> Redux Thunk
// run between these 2 points -->
// 1) dispatch action & 2) reducer 

export const createProject = (project) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        // make asynchronous call for DataBase 
        const firestore = getFirestore(); // <== get DB Con:
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Taiseen',
            authorLastName: 'Azam',
            authorID: 1243,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

    };
};