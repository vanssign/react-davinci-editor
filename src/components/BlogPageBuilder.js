import { FirebaseInitialisation } from '../functions/FirebaseFunctions';
import 'firebase/firestore';
import PageHTML from './PageHTML';
import React, { useState, useEffect } from 'react';
export function BlogPostBuilder({ BlogId, FirebaseConfig }) {
    const [PostData, setPostData] = useState();
    const fetchBlog = async () => {
        let postData;
        const fire = FirebaseInitialisation(FirebaseConfig);
        const blogRef = fire.firestore().collection('blog').doc(BlogId);
        const doc = await blogRef.get();
        if (!doc.exists) {
            postData = [];
        }
        else {
            postData = doc.data();
        }
        setPostData(postData);
    }
    useEffect(() => {
        fetchBlog()
    })
    useEffect(() => {
        if(PostData) {
        document.title = PostData.pageInfo.title
        }
    }, [PostData]);

    return (
        <div className="container-fluid py-2">
            <div className="row py-3">
                {
                    PostData && PostData.elementArray.map((element, index) =>
                        <PageHTML key={element.tag + index} element={element} index={index} />
                    )
                }
            </div>
        </div>
    )
}