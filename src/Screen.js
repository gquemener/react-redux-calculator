import React from 'react';
import { connect } from 'react-redux';
import './Screen.css';

const formatOutput = (keys) => {
    if (0 === keys.length) {
        return '0';
    }

    let output = '';
    let clearOutput = true;
    for (let key of keys) {
        if (clearOutput) {
            output = '';
            clearOutput = false;
        }

        if (-1 !== ['+', '-', '/', '*'].indexOf(key)) {
            clearOutput = true;
            continue;
        }

        output = output + '' + key;
    }

    return output;
};

const mapStateToProps = (state) => ({
    value: formatOutput(state)
});

const Screen = ({value}) => {
    return <div className="screen">{value}</div>
}

export default connect(mapStateToProps)(Screen);
