import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App.jsx';

injectTapEventPlugin();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Component/>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);
