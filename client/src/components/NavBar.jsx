import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';

export default class NavBar extends React.Component {
	constructor() {
        super()
    }
	render() {
		return (
			<MuiThemeProvider>
			    <div>
					<Drawer
						docked={false}
						width={200}
						open={this.props.open}
						onRequestChange={() => this.props.onToggle()}
					>
					
							<MenuItem>React</MenuItem>
						<MenuItem>Redux</MenuItem>
					</Drawer>
					<AppBar
						title="GoLearn"
						onLeftIconButtonClick={ () => this.props.onToggle()}
					/>
				</div>
			</MuiThemeProvider>
		)
	}
}

