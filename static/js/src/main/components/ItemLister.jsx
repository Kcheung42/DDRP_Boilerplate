import React from 'react';

export class ItemLister extends React.Component {
	constructor() {
		super();
		this.state={items:[]};  
	}
	componentDidMount() {
		fetch('http://127.0.0.1:8000/music/api/1.json',{
			credentials: 'include'
		})
		.then((resp)=> resp.json())
		.then(newItem => this.setState((prevState, props) => {
				console.log(newItem);
				return { items: [...prevState.items, newItem]  };
			}))
		console.log(this.state.items);
	}
	render() {
		return(
			<div>
			<ul>
				{this.state.items.length ? this.state.items.map(item=><li key={item.id}><h2>{item.name}</h2><p>{item.bio}</p><img src={item.image}/></li>) : <li>Loading...</li>
				 }
			</ul>
			</div>
		)
	}
};
