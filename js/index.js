import React from 'react';
import ReactDOM from 'react-dom';

import offcanvas from './offcanvas';

import '../less/main.less';

const App = () => (
  <div>
	 <h1>Hello world!</h1>
   <p>This is normal text</p>
  </div>
);

var app = React.createElement(App);

ReactDOM.render(app, document.getElementById("app"));
