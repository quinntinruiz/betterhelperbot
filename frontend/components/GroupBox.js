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
                
            </div>
        );
    };
}
    GroupBox.propTypes = {
        name: PropTypes.string,
        groupBox: PropTypes.any
    };


    export default GroupBox;

