import React from 'react'
import { storiesOf } from '@storybook/react';
import BuildIt from './BlogIndexExample';
const stories = storiesOf('App Test', module);
import {firebaseConfig} from './firebaseConfig';

stories.add('All posts', () => {
    return <BuildIt FirebaseConfig={firebaseConfig} />
})