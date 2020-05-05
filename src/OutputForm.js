import React from 'react';

class OutputForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			signal: 0,
			min: -10,
			max: 10
		}
	}

	signalChanged = (event) => {
		const value = event.target.value;

		const signalNumber = parseInt(value.charAt(value.length - 1)) - 1;

		let min, max;
		if(signalNumber === 0)
		{
			min = -10;
			max = 10;
		}
		else if(signalNumber === 1)
		{
			min = 0;
			max = 10;
		}
		else
		{
			min = -10;
			max = 0;
		}
		this.setState({signal: signalNumber, min, max});
	}

	onSubmitted = (event) => {
		event.preventDefault();

		const {inputValue, signal} = this.state;


		if(this.state.inputValue.length > 0)
		{			
			fetch('http://localhost:3001/outputSignal', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					inputValue,
					signal
				})
			});
		}
	}

	inputChanged = (event) => {
		this.setState(
		{
			inputValue: event.target.value
		});
	}

	render = () => {
		return (
		 <form className="output-form" onSubmit={this.onSubmitted}>
          <div className="first-col">
            <label> Informe a tensão (em V)</label>
			<select id="chart-type" className="button" onChange={this.signalChanged}>
	                <option value="chart-1">Degrau</option>
	                <option value="chart-2">Rampa crescente</option>
	                <option value="chart-3">Rampa decrescente</option> 
	        </select>
          </div>  
          <div className="second-col">
            <input onChange={this.inputChanged} type="number" min={this.state.min} max={this.state.max} placeholder="Exemplo: 7"></input>
            <button className="button">Confirmar</button>
          </div>
         </form>
		);
	}
}

export default OutputForm;