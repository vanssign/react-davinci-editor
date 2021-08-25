import React from 'react'
import { storiesOf } from '@storybook/react';
import { FirebaseEditor } from '../components/FirebaseEditor';

const stories = storiesOf('App Test', module);

stories.add('Firebase Editor', () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDJbxny_56x-BVvHMAOUtGDd7Byf_hPpr8",
        authDomain: "davinci-4d7ea.firebaseapp.com",
        projectId: "davinci-4d7ea",
        storageBucket: "davinci-4d7ea.appspot.com",
        messagingSenderId: "945947471424",
        appId: "1:945947471424:web:96f8fd4cc134c52edc39a5",
        measurementId: "G-C3J653PEH7"
    };
    return (
        <FirebaseEditor
            FirebaseConfig={firebaseConfig}
            RegisterationAllowed={true} />
    )
})