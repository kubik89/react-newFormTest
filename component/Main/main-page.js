import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router";
import Welcome from "../Welcome/welcome";
import AllUsers from "../allUsers/allUsers";
import {Error} from "../Error/Error";
import {NavLink} from "react-router-dom";
import OneUser from "../oneUser/oneUser";
import AllUs from "../AllUs/AllUs";
import {UserPostsAll} from "../AllUs/userPostsAll";
import Us1 from "../AllUs/Us1";
import UserInfo from "../AllUs/Userinfo";

class MainPage extends Component {
    render() {
        return (
            <>
                <NavLink to={'/'}>Home</NavLink> <br/>
                <NavLink to={'/users'}>Users</NavLink> <br/>
                <NavLink to={'/AllUs'}>All Users</NavLink> <br/>

                <div>
                            <Switch>
                                <Route path={'/usPosts/:id'} component={Us1}/>
                                <Route path={'/AllUs/:id'} component={UserInfo}/>
                                <Route path={'/AllUs'} component={AllUs}/>
                                <Route path={'/users'} component={AllUsers}/>
                                <Route path={'/error'} component={Error}/>
                                <Route exact path={'/'} component={Welcome}/>
                                {/*<Route render={() => <Error />}/>*/}
                                <Redirect to={'/error'}/>
                            </Switch>
                        {/*<Route render={() => <Error/>}/>*/}

                </div>
                </>
        );
    }
}

export default MainPage;
