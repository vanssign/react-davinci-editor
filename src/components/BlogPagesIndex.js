import React, { useState, useEffect } from 'react'
import { FirebaseInitialisation } from '../functions/FirebaseFunctions';
import 'firebase/firestore';
const withBlogPosts = WrappedComponent => props => {
    const [AllPosts, setAllPosts] = useState([]);
    const fetchAllPosts = async () => {
        var allPostsData = [];
        const fire = FirebaseInitialisation(props.FirebaseConfig);
        const blogsRef = fire.firestore().collection('blog')
        const snapshot = await blogsRef.get();
        snapshot.forEach(doc => {
            allPostsData.push({
                id: doc.id,
                ...doc.data()
            })
        });
        setAllPosts(allPostsData);
    }
    useEffect(() => {
        fetchAllPosts();
    }, [AllPosts.length])
    console.log(AllPosts);
    return (
        <WrappedComponent
            {...props}
            blogPosts={AllPosts}
        />
    )
}
export default withBlogPosts