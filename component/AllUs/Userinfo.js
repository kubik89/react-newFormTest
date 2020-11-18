import React from 'react'

export default class UserInfo extends React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(value => value.json())
            .then(user => this.setState({user}))
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                {
                    user && (
                        <div style={{border: '1px solid blue', margin: '5px'}}>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
