import React from 'react';
import ExportButton from './ExportButton.js';
import './ExportButton.css';

class InputForm extends React.Component {
	onChange = (event) => {
		const newFrequency = event.target.value;

		if(newFrequency) {
			this.sendNewFrequency(newFrequency);
		}
	}

	sendNewFrequency = (newFrequency) => {
		const value = parseInt(newFrequency.charAt(newFrequency.length - 1)) - 1;

		fetch('http://localhost:3001/samplingFrequency', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({value})
		})
	}

	render = () => {
		return (
			<form className="input-form">
          		<select id="sampling-frequency" className="button" onChange={this.onChange}>
              		<option value="frequency-1">1 Hz</option>
              		<option value="frequency-2">3 Hz</option>
              		<option value="frequency-3">10 Hz</option> 
          		</select>
          		<ExportButton value="Exportar para CSV"/> 
       		</form>
		);
	}
}

export default InputForm;