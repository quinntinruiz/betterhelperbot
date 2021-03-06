import { Student, Group } from '../backend/models'
import React from 'react';
import PropTypes from 'prop-types';
import CreateGroup from './CreateGroup'
class GroupList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                {Group.find({}, function (err, groups) {
                    var userMap = {};

                    groups.forEach(function (group) {
                        
                        <GroupBox group={group}/>
                    });
                
                })}
                

            </div>
        );
    }
};

GroupScreen.propTypes = {
    name: PropTypes.string,
    groupScreen: PropTypes.any
};


export default GroupScreen;

