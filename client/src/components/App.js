import React from 'react'

export default class App  extends React.Component{
	constructor(props) {
		super(props)
		this.fetchData(props)
		this.state = {
			jsondata: []
		}
	}
  componentDidMount() {
		this.fetchData()
	}	
	fetchData(){
		fetch("http://localhost:8080/api/1")
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				jsondata: responseData,
			})
		})
	}
	render(){
		var list = [];
		for(var i in this.state.jsondata){
			list.push(
				<li key={i}>
					<a href={this.state.jsondata[i].url}>
						{this.state.jsondata[i].title}	
					</a>
				</li>
			);
		}
		return(
			<ul>{list}</ul>
		)
	}
}



