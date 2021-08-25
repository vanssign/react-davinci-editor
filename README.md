# React Davinci Editor
An easy to integrate WYSIWYG Editor for your firebase react app

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Disclaimer**: React Davinci Editor is a work in progress, there are still many components and features to add before is considered stable so it is subject to change during its development.

<hr/>

## Installation

`npm install react-davinici-editor`

## Prequisites

Setup a firebase project, refer [Firebase docs](https://firebase.google.com/docs/web/setup) and setup authentication via email address, Firestore Database with a collection named **blog** and firebase storage.

## Components

Note: Head down to Project Settings of your firebase app and find the firebaseConfig

### Firebase Editor

Editor interface for building your blog posts

`import {FirebaseEditor} from 'react-davinci-editor'`

`<FirebaseEditor FirebaseConfig={firebaseConfig} RegisterationAllowed={true}/>`

| Property             | Type    | Description                           |
| -------------------- | ------- | ------------------------------------- |
| FirebaseConfig       | Object  | firebaseConfig values of your project |
| RegisterationAllowed | Boolean | Firebase registeration page visibility |


### Blog Post Builder

Component to layout your blog post by fetching data from firestore

`import {BlogPostBuilder} from 'react-davinci-editor'`

`<BlogPostBuilder FirebaseConfig={firebaseConfig} BlogId="2k6zR62zkcJNOl4UG208" />`

| Property       | Type   | Description                           |
| -------------- | ------ | ------------------------------------- |
| FirebaseConfig | Object | firebaseConfig values of your project |
| BlogId         | String | Document Id of the post in firestore  |

Notes: 
- Refer [firebase docs](https://firebase.google.com/docs/firestore/query-data/get-data#get_all_documents_in_a_collection) and fetch doc ids for the collection 'blog;
- Use react-router or similar packages to generate blog posts based on params.
