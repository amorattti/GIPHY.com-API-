import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {AppContainer} from 'react-hot-loader';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept('../components/App', () => {
        const NextApp = require('../components/App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
