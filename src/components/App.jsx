import React from 'react';
import styles from './App.css';
import RaisedButton from 'material-ui/RaisedButton';

const App = () => (
  <div className={styles.app}>
    <h2>Hello Mastora</h2>
    
 
      <RaisedButton label="shop log in" primary={true} />
      <RaisedButton label="customer log in" secondary={true} />
      <br />
      <RaisedButton label="shop register" secondary={true} />
      <RaisedButton label="customer register" primary={true} />
  </div>
);

export default App;
