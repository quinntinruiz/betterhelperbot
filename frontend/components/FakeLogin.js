import React from 'react';
import PropTypes from 'prop-types';
var bodyParser = require('body-parser')

class CreateGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            nameInput: '',

        };
        this.handleNameChange = this.handleNameChange.bind(this);

    };
    handleNameChange(event) {
        this.setState({ nameInput: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/api/addUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                name: this.state.nameInput
            }
        })
    }

    render() {
        return (
            <div>
             <h3>Create Group</h3>
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <input type="text" placeholder='Name' value={this.state.nameInput} onChange={this.handleNameChange} />
                </form>
            </div>
        )
    }
}
export default FakeLogin;
