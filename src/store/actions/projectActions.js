// 26-Jun-2021
// Redux Middleware ==> Redux Thunk
// run between these 2 points -->
// 1) dispatch action & 2) reducer 

export const createProject = (project) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        // make asynchronous call for DataBase 
        const firestore = getFirestore(); // <== get DB Con:

        const profile = getState().firebaseAuth.profile;
        const authId = getState().firebaseAuth.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authId,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

    };
};