import React from "react";

export const UserPostsAll = (props) => {
    let {usPost} = props
    return (
        <div>
            {usPost.id} - {usPost.title}
        </div>
    )
}
