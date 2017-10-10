import React from 'react';
import { render } from "react-dom"
// import ReactDOM from 'react-dom';

class single_band extends React.Component {
	render() {
		return <div> "Here's a single band!" </div>
	}
}

render(<App />, document.getElementById('container'))
