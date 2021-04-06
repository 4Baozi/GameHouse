import firebase from '../config/firebase-config';

export const socialMediaAuth = provider => (
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(response => response.user)
        .catch(error => error)
);