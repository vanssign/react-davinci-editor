import React from 'react'
import { storiesOf } from '@storybook/react';
import { FirebaseEditor } from '../components/FirebaseEditor';
import {firebaseConfig} from './firebaseConfig';

const stories = storiesOf('App Test', module);

stories.add('Firebase Editor', () => {
    return (
        <FirebaseEditor
            FirebaseConfig={firebaseConfig}
            RegisterationAllowed={true} />
    )
})