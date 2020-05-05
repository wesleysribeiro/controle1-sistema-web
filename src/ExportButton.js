import React from 'react';
import './ExportButton.css';

class ExportButton extends React.Component {
	constructor(props) {		
		super();
		this.state = {props};
		console.log(this.state);
	}

	render = (props) => {
		return (
			<button className="button">
				<a href='http://localhost:3001/exportCsv' download>
				{this.state.props.value}
				</a>
			</button>);
	}
}

export default ExportButton;