import React, {Component} from 'react';

class UserName extends Component {

    render() {
        let {user} = this.props
        return (
            <div class="list-group-item">
                {/*<button type="button" className="btn btn-primary">Primary</button>*/}
                {user.name} - {user.username}
            </div>
        );
    }
}

export default UserName;
