import React from 'react';
import { connect } from 'react-redux';
import { pressKey } from './actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    onKeyPress(value) {
        dispatch(pressKey(value));
    }
});

const Key = ({ value, onKeyPress }) => {
    return <button className="key" onClick={onKeyPress.bind(this, value)}>{value}</button>
}

export default connect(mapStateToProps, mapDispatchToProps)(Key);
