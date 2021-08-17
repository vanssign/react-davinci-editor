import React from 'react'
import { storiesOf } from '@storybook/react';
import { BlogPostBuilder } from '../components/BlogPageBuilder';
const stories = storiesOf('App Test', module);

stories.add('Page Build', () => {
    
    return (
        <BlogPostBuilder
            FirebaseConfig={FirebaseConfig}
            BlogId="2k6zR62zkcJNOl4UG208" />
    )
})