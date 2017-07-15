import React from 'react';
import PropTypes from 'prop-types';

class CreateGroup extends React.Component {
    constructor() {
        super();

        this.state = {
            assignmentInput: '',
            partInput: '',
            locationInput: '',
            problemInput: ''
        };
        this.handleAssignmentChange = this.handleAssignmentChange.bind(this);
        this.handlePartChange = this.handlePartChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleProblemChange = this.handleProblemChange.bind(this);
    };
    handleAssignmentChange(event) {
        this.setState({ assignmentInput: event.target.value })
    }
    handlePartChange(event) {
        this.setState({ partInput: event.target.value })
    }
    handleLocationChange(event) {
        this.setState({ locationInput: event.target.value })
    }
    handleProblemChange(event) {
        this.setState({ problemInput: event.target.value })
    }
    handleSubmit() {
        fetch('localhost:3030/addGroup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                assignment: this.state.assignmentInput,
                part: this.state.partInput,
                location: this.state.locationInput,
                problem: this.state.problemInput,
            })
        })
    }
    //put variables in body if post request, params(colon in route) or query (?=)




    render() {

        return (
            <div>
                <h3>Create Group</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Assignment' value={this.state.assignmentInput} onChange={this.handleAssignmentChange} />
                    <input type="text" placeholder='Part' value={this.state.partInput} onChange={this.handlePartChange} />
                    <input type="text" placeholder='Location' value={this.state.locationInput} onChange={this.handleLocationChange} />
                    <input type="text" placeholder='Problem' value={this.state.problemInput} onChange={this.handleProblemChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
};

CreateGroup.propTypes = {
    name: PropTypes.string,
    createGroup: PropTypes.any
};


export default CreateGroup;
