import React from 'react';
import PropTypes from 'prop-types';
import CreateGroup from './CreateGroup'
const GroupScreen = ({ groupScreen }) => {
   
    return (
        <div>
            <text>
                This is a group screen!
            <CreateGroup />
            </text>
        </div>
    );
};

Title.propTypes = {
    name: PropTypes.string,
    groupScreen: PropTypes.any
};


export default GroupScreen;
