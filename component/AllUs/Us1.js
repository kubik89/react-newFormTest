import React from "react";
import {withRouter} from "react-router";

const Us1 = (props) => {

    let {name, id} = props.user
    let getSomeUserPosts = props.getSomeUserPosts
    let getUserInfo = props.getUserInfo


    const navigate = (path) => {
        props.history.push(path)
    }

    return (
        <div>
            <button onClick={() => getSomeUserPosts(id)}>My Posts</button>
            <button onClick={() => navigate(`/AllUs/${id}`)}>User Info</button>
            {name} - {id}
        </div>
    )
}

export default withRouter(Us1)
