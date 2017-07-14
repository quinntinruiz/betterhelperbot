import React from 'react';
import PropTypes from 'prop-types';

const GroupScreen = ( { groupScreen } ) => {
    return (
        <div>
          <text>
            This is a group screen!
          </text>
        </div>
    );
};

Title.propTypes = {
    name: PropTypes.string,
    groupScreen: PropTypes.any
};


export default GroupScreen;
