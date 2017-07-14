import {Student, Group} from '../backend/models'
import React from 'react';
import PropTypes from 'prop-types';
import CreateGroup from './CreateGroup'
const GroupList = ({ groupScreen }) => {
   
    return (
        <div>
            <text>
               wtf do I map? 
            
            </text>
            <GroupBox/>

        </div>
    );
};

GroupScreen.propTypes = {
    name: PropTypes.string,
    groupScreen: PropTypes.any
};


export default GroupScreen;
 
