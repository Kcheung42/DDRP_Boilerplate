import React from 'react';
import { render } from "react-dom"
// import ReactDOM from 'react-dom';

// import all_bandsContainer from "./containers/all_bandsContainer"

class all_bands extends React.Component {
	render() {
		return <div> Hello World!</div>
		// return(
		// 	<all_bandsContainer />
		// )
	}
}
ReactDOM.render(<App />, document.getElementById('container'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import HelloWorld from './components/hello-world';
//
// ReactDOM.render(
//   <AppContainer>
//     <HelloWorld />
//   </AppContainer>,
//   document.getElementById('react-root')
// );
//
// if (module.hot) {
//   module.hot.accept('./components/hello-world', () => {
//     const HelloWorld = require('./components/hello-world').default;
//     ReactDOM.render(
//       <AppContainer>
//         <HelloWorld />
//       </AppContainer>,
//       document.getElementById('react-root')
//     );
//   });
// }
