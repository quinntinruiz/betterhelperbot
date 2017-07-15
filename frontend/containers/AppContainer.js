import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import GroupScreen from '../components/GroupScreen'

const AppContainer = ({ name, groupScreen }) => {
    return (
        <div>
            <Title name={name} />
            <GroupScreen name={groupScreen} />
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
    groupScreen: PropTypes.any
};

const mapStateToProps = (state) => {
    return {
        name: state.name,
        groupScreen: state.groupScreen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
