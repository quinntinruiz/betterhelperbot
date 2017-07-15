import { Student, Group } from '../backend/models'
import React from 'react';
import PropTypes from 'prop-types';
import CreateGroup from './CreateGroup'
import groups from '../data/groups'
import students from '../data/students'

class GroupBox extends React.Component {
    constructor() {
        super();
        state = {
            joined: 'Join Group'
        }
        this.joinToggle = this.joinToggle.bind(this);

    }
    joinToggle() { //need to bind this below
        event.preventDefault();

        if (this.state.joined === 'Join Group') {
            this.state.joined === 'Leave Group';

            fetch('http://localhost:3000/api/joinGroup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: {
                    assignment: this.state.assignmentInput,
                    part: this.state.partInput,
                    location: this.state.locationInput,
                    problem: this.state.problemInput,
                }
            })
        } else {
            this.state.joined === 'Join Group';

            fetch('http://localhost:3000/api/joinGroup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: {
                    assignment: this.state.assignmentInput,
                    part: this.state.partInput,
                    location: this.state.locationInput,
                    problem: this.state.problemInput,
                }
            })
        }
    }

    render() {
        return (
            <div>
                <button value={this.state.joined} onClick={joinToggle()}></button>
                <span>
                  <p>this.props.group.assignment</p>
                </span>
                   <p>this.props.group.part</p>
                <span>
                </span>
                   <p>this.props.group.problem</p>
                <span>
                  Members: Mason, Quinn, Jay, Sunny
                </span>
                <span>
                  <p>this.props.group.location</p>
                </span>
            </div>
        );
    };
}
GroupBox.propTypes = {
    name: PropTypes.string,
    groupBox: PropTypes.any
};


export default GroupBox;

