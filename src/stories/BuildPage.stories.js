import React from 'react'
import { storiesOf } from '@storybook/react';
import { BlogPostBuilder } from '../components/BlogPageBuilder';
const stories = storiesOf('App Test', module);
import {firebaseConfig} from './firebaseConfig';

stories.add('Page Build', () => {
    return (
        <BlogPostBuilder
            FirebaseConfig={firebaseConfig}
            BlogId="2k6zR62zkcJNOl4UG208" />
    )
})