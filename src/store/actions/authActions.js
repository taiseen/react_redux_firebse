export const signIn = (credentials) => {

    return (dispatch, getState, { getFirebase }) => {

        const firebaseAuthService = getFirebase();

        firebaseAuthService.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {

    return (dispatch, getState, { getFirebase }) => {

        const firebaseAuthService = getFirebase();

        firebaseAuthService.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            })
    }
}