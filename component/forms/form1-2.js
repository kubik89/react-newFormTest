import React, {Component} from 'react';

class Form12 extends Component {

    getSomeUserByName = this.props.getSomeUserByName

    constructor(props) {
        super(props);
        this.myInput1 = React.createRef();
    }

    render() {
        return (
            <div>
                <input class="form-control" id="myInput" type="text" placeholder="Search.." ref={this.myInput1} onChange={() => {
                    this.getSomeUserByName(this.myInput1.current.value)
                }}
                />
            </div>

        )
    }
}

export default Form12;
