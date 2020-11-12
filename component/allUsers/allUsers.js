import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import OneUser from "../oneUser/oneUser";
import User1 from "../User1/user1";
import {PostService} from "../../services/postService";
import MyPost from "./myPost";
import UserForformzDz from "./userForformzDz";
import Form1 from "../forms/form1";
import Form12 from "../forms/form1-2";
import UserName from "./userName";

class AllUsers extends Component {
    _userService = new UserService();
    _postService = new PostService()
    state = {
        users: [],
        someUser: [],
        someUserName: [],
        allPosts: [],
        singlePost1: [],
        postsMapped: []
    };

    // async componentDidMount() {
    //     let users = await this._userService.getAllUsers().then(value => {
    //         this.setState({users})
    //         }
    //     )
    // }

    componentDidMount() {
        this._userService.getAllUsers().then(value => {
            this.setState({users: value})
        })
        this._postService.getAllPosts().then(value => {
            this.setState({allPosts: value})
        })
    }

    singlePost = (id) => {
        console.log('222')
        let filter = this.state.allPosts.filter(value => value.id === id);
        this.setState({singlePost1: filter[0]})
        console.log(filter[0])
    }

    getSomeUserById = (id) => {
        let userFind = this.state.users.filter(value => value.id === +id);
        // console.log(userFind)
        this.setState({someUser: userFind})
        // console.log(userFind)
    }

    getSomeUserByName = (name) => {
        // console.log(this.state.users);
        let userFind1 = this.state.users.filter(value => value.name.includes(name));
        // console.log(userFind1);
        this.setState({someUserName: userFind1})
        // console.log(this.state.someUserName)
    }

    render() {
        let {someUser} = this.state;
        let {someUserName} = this.state;
        let {allPosts} = this.state;
        let {users} = this.state;
        let {singlePost1} = this.state;

        return (
            <div>
                {/*{*/}
                {/*    users.map(value => (<OneUser*/}
                {/*            user={value}*/}
                {/*            key={value.id}*/}
                {/*            getUserByID={this.getSomeUserById}*/}
                {/*            currentPost={this.singlePost}*/}
                {/*        />)*/}
                {/*    )*/}
                {/*}*/}
                {
                    <Form1 getUserByID3={this.getSomeUserById}/>
                }
                {
                    someUser.map(value => (<User1
                        someUser={value}
                        key={value.id}
                    />))
                }
                {/*{*/}
                {/*    (<User1 someUser={someUser}/>)*/}
                {/*}*/}
                {
                    <Form12 getSomeUserByName={this.getSomeUserByName}/>
                }
                {
                    someUserName.map(value => (<UserName
                        user={value}
                        key={value.id}
                    />))
                }
                {/*{*/}
                {/*    someUserName.map(value => (<Form12*/}
                {/*        someUser={value}*/}
                {/*        key={value.id}*/}
                {/*        // getSomeUserByName={this.getSomeUserByName}*/}
                {/*    />))*/}
                {/*}*/}
                {/*{*/}
                {/*    (<MyPost singlePost={singlePost1}/>)*/}
                {/*}*/}
                {/*{*/}
                {/*    (<UserForformzDz getUserByID1={this.getSomeUserById}/>)*/}
                {/*}*/}
                {/*{*/}
                {/*    (<UserForformzDz*/}
                {/*        getUserByID2={this.getSomeUserByIdforForm}*/}
                {/*        someUser={someUser}*/}
                {/*    />)*/}
                {/*}*/}
                {/*{*/}
                {/*    (<AllUsers someUser={someUser}/>)*/}
                {/*}*/}
                {/*{*/}
                {/*    allPosts.map(value => (<MyPost singlePost={value} key={value.id}/>*/}
                {/*    ))*/}
                {/*}*/}
                {/*{*/}
                {/*    // (<OneUser currentPost={this.singlePost}/>)*/}
                {/*}*/}
            </div>
        );
    }
}

export default AllUsers;
