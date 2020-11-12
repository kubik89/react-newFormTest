import React, {Component} from 'react';

class Form1 extends Component {

    gotUserByID = this.props.getUserByID3

    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">ID</span>
                </div>
                <input class="form-control" placeholder="1-10" aria-label="ID" aria-describedby="basic-addon1" ref={this.myInput} onChange={() => {
                    // this.setState({data1: this.myInput.current.value})
                    this.gotUserByID(this.myInput.current.value)
                }
                }
                />
            </div>

        );
    }
}

export default Form1;
