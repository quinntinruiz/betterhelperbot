import React from 'react';
import PropTypes from 'prop-types';

const GroupScreen = ( { groupScreen } ) => {
    return (
        <div>
          <span>
            This is a group screen!
          </span>
        </div>
    );
};

GroupScreen.propTypes = {
    name: PropTypes.string,
    groupScreen: PropTypes.any
};


export default GroupScreen;
 
