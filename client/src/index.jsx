import React  from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import {If} from './components/function.jsx'

class App extends React.Component {
	constructor() {
    	super()
   		this.state = {
      		open: false,
      		page: "home"
    	}
  	}
  	handleToggle() {
    	this.setState({
      		open: !this.state.open
    	})
  	}

  	jump(){
		this.setState({
            page: nextPage
        });
  	}

	render(){
		return (
			<div>
				<NavBar
					onToggle={() => this.handleToggle()}
					open={this.state.open}
				/>
				<If condition={this.state.page == 'home'}> 
					<Home/>
				</If>
			 </div>
		)
	}
}


ReactDOM.render(
	<App/>,    
	document.getElementById('root')
)
