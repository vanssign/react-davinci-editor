import React from 'react'
import { storiesOf } from '@storybook/react';
import { FirebaseEditor } from '../components/FirebaseEditor';

const stories = storiesOf('App Test', module);

stories.add('Firebase Editor', () => {
    return (
        <FirebaseEditor
            FirebaseConfig={FirebaseConfig}
            RegisterationAllowed={true} />
    )
})