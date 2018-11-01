import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';
import * as serviceWorker from './serviceWorker';
import {createGlobalStyle} from 'styled-components';

const StyledApp = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: #746A6A;
    
    & > * {
      box-sizing: border-box; 
    }
  }
`;

ReactDOM.render(<React.Fragment><App /><StyledApp/></React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
