import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
    return {
        onKeyPress: (value) => {
            dispatch({
                type: 'KEY_PRESSED',
                value
            });
        }
    };
};

const Key = ({ value, onKeyPress }) => {
    return <button className="key" onClick={onKeyPress.bind(this, value)}>{value}</button>
}

export default connect(mapStateToProps, mapDispatchToProps)(Key);
