declare let require: any;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const { AppContainer } = require('react-hot-loader');
declare let module: any;
import App from './components/App';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root')
  );
};
console.log(ReactDOM);
render();
if (module.hot) {
  module.hot.accept('./components/App', render);
}
