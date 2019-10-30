import React from 'react';
import Keys from './Keys';
import Screen from './Screen';

class App extends React.Component {
    render() {
        return (
            <div className="calculator">
                <Screen />
                <Keys />
            </div>
        )
    }
}

export default App;
