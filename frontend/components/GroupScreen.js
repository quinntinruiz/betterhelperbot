import React from 'react';
import PropTypes from 'prop-types';
import CreateGroup from './CreateGroup'
const GroupScreen = ({ groupScreen }) => {

    return (
        <div>
            <span>
                This is a group screen!
            </span>
            <form>
              <label>
                Assignment:
              </label>
              <label>
                Assignment:
              </label>
            </form>
            <CreateGroup />

        </div>
    );
};

GroupScreen.propTypes = {
    name: PropTypes.string,
    groupScreen: PropTypes.any
};


export default GroupScreen;
