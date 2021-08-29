import firebase from 'firebase/app';
export function FirebaseInitialisation(FirebaseConfig) {
    try {
        firebase.initializeApp(FirebaseConfig);
    } catch (err) {
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack)
        }
    }
    return firebase;
}