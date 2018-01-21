import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default class Home  extends React.Component{
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
		fetch("api/1")
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
				<a href={this.state.jsondata[i].url} key={i}>
				<Card >
					<CardHeader
						title={this.state.jsondata[i].title}
						subtitle={`create at:${this.state.jsondata[i].created_at}	like:${this.state.jsondata[i].likes_count}`}/>
				</Card>
				</a>
			);
		}
		return(

			<MuiThemeProvider>
			<div>
				{list}	
			</div>
			</MuiThemeProvider>
		)
	}
}



