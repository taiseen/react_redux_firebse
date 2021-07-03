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

export const signUp = (newUser) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const authService = getFirebase();
        const dataService = getFirestore();

        authService.auth().createUserWithEmailAndPassword( // create New User
            newUser.email,
            newUser.password,
        ).then(response => { // create User Record
            return dataService.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}
