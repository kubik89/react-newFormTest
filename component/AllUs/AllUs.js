import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import {PostService} from "../../services/postService";
import {UserPostsAll} from "./userPostsAll";
import Us1 from "./Us1";

class AllUs extends Component {

    _userService = new UserService()
    _postService = new PostService()
    state = {
        allUs: [],
        allSomeUserPosts: [],
        allPosts: [],
        someUserPosts: [],
        userInfo: []
    }

    componentDidMount() {
        this._userService.getAllUsers().then(value => {
            this.setState({allUs: value})
        })
        this._postService.getAllPosts().then(value => {
            this.setState({allPosts: value})
        })
    }

    getSomeUserPosts = (userId) => {
        let filter = this.state.allPosts.filter(value => value.userId === userId);
        this.setState({someUserPosts: filter})
        // console.log(filter)
    }

    getUserInfo = (userId) => {
        let filter = this.state.allUs.filter(value => value.id === userId);
        this.setState({userInfo: filter})
        console.log(filter)
    }

    render() {
        let {allUs} = this.state
        let {someUserPosts} = this.state
        return (
            <div>
                {
                    allUs.map(value => <Us1
                            user={value}
                            key={value.id}
                            getSomeUserPosts={this.getSomeUserPosts}
                            getUserInfo={this.getUserInfo}
                        />
                    )
                }
                {
                    someUserPosts.map(value => <UserPostsAll
                        usPost={value}
                        key={value.id}
                        />
                    )
                }
            </div>
        );
    }
}

export default AllUs;
