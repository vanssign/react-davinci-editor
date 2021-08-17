# React-Davinci-Editor
A WYSIWYG Editor for your firebase react app

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

`npm install react-davinici-editor`

## Components

### Firebase Editor

Editor interface for building your blog posts

`import {FirebaseEditor} from 'react-davinci-editor'`

`<FirebaseEditor FirebaseConfig={firebaseConfig} RegisterationAllowed={true}/>`

| Property             | Type    | Description                                    |
| -------------------- | ------- | ---------------------------------------------- |
| FirebaseConfig       | Object  | firebaseConfig values of your project          |
| RegisterationAllowed | Boolean | Editor should show firebase registeration page |

Note: Head down to Project Settings of your firebase app and find the firebaseConfig

### Blog Post Builder

`import {BlogPostBuilder} from 'react-davinci-editor'`

`<BlogPostBuilder FirebaseConfig={firebaseConfig} BlogId="2k6zR62zkcJNOl4UG208" />`

| Property       | Type   | Description                           |
| -------------- | ------ | ------------------------------------- |
| FirebaseConfig | Object | firebaseConfig values of your project |
| BlogId         | String | Document Id of the post in firestore  |

Note: Use react-router or similar packages to generate blog posts based on params
