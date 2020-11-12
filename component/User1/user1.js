import React, {Component} from 'react';

class User1 extends Component {
    render() {
    let someUser1 = this.props.someUser;
        return (
            <div class="list-group-item">
                {someUser1.id} - {someUser1.name}
            </div>
        );
    }
}

export default User1;
