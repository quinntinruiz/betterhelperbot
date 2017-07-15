import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import GroupScreen from '../components/GroupScreen';
import GroupBox from '../components/GroupBox';


const AppContainer = ({ name, groupScreen, groupBox }) => {
    return (
        <div>
            <Title name={name} />
            <GroupScreen name={groupScreen} />
            <GroupBox name={groupBox} />
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
        groupScreen: state.groupScreen,
        groupBox: state.groupBox
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
