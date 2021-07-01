export const signIn = (credentials) => {

    return (dispatch, getState, { getFirebase }) => {
        const firebaseAuth = getFirebase();

        firebaseAuth.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR' })
        })
    }
}

export const signOut = () => {

}