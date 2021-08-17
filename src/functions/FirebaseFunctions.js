import firebase from 'firebase';
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

export async function FirebaseFetchAllBlogs() {
    var allPostsData = [];
    const blogsRef = fire.firestore().collection('blog')
    const snapshot = await blogsRef.get();
    snapshot.forEach(doc => {
        allPostsData.push({
            id: doc.id,
            ...doc.data()
        })
    });
    return allPostsData;
}