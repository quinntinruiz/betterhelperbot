import { Student, Group } from '../backend/models'
import React from 'react';
import PropTypes from 'prop-types';
import CreateGroup from './CreateGroup'
import groups from '../data/groups'
import students from '../data/students'

class GroupBox extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <span>
                  Assignment: Mongoose Loader
                </span>
                  Section: 1A
                <span>
                  Members: Mason, Quinn, Jay, Sunny
                </span>
                <span>
                  Location: 12th St., San Francisco
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
