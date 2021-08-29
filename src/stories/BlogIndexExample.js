import React from 'react'
import withBlogPosts from '../components/BlogPagesIndex';
function BuildIt(props) {
    return (
        <div>
            {props.blogPosts.map((val, i) => {
                return (
                    <div key={i}>
                        {val.pageInfo.title}
                    </div>
                )
            })}
        </div>
    )
}
export default withBlogPosts(BuildIt);