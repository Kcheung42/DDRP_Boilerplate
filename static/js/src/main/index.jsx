import React from 'react';
import ReactDOM from 'react-dom';
import { ItemLister } from './ItemLister';

// class ItemLister extends React.Component {
// 	constructor() {
// 		super();
// 		this.state={items:[]};  
// 	}
// 	componentDidMount() {
// 		fetch('http://127.0.0.1:8000/music/api/1.json')
// 		.then((resp)=> resp.json())
// 		.then(newItem => this.setState((prevState, props) => {
// 				console.log(newItem);
// 				return { items: [...prevState.items, newItem]  };
// 			}))
// 		console.log(this.state.items);
// 	}
// 	render() {
// 		return(
// 			<div>
// 			<ul>
// 				{this.state.items.length ? this.state.items.map(item=><li key={item.id}><h2>{item.name}</h2><p>{item.bio}</p><img src={item.image}/></li>) : <li>Loading...</li>
// 				 }
// 			</ul>
// 			</div>
// 		)
// 	}
//
// }

class Band extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.name}</h2>
				<button onClick={this.customClickFunction}>Click Me!!</button>
				<img src={this.props.image} />
			</div>
		);
	}
}

class House extends React.Component {
	constructor() {
		super();
		this.state = {
			customText: "Text before the click",
		};
		this.customClickFunction = this.customClickFunction.bind(this);
	}
	customClickFunction() {
		this.setState({customText: "You clicked the Button"});
	}
	render() {
		return (
			<div>
				Hi
				<h1>{this.state.customText}</h1>
				<button onClick={this.customClickFunction}>Click Me!!</button>
				<Band name="FOB" image="http://static1.squarespace.com/static/58f4f0c4d2b8579e6b3f88ed/t/5902a889a5790a0fc5f13006/1493346442177/fob.jpg?format=1000w"/>
			</div>
		)
	}
}

ReactDOM.render(<ItemLister />, document.getElementById('react-root'))
// ReactDOM.render(<House />, document.getElementById('react-root'))
