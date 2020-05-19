import React from 'react';
import Chart from 'chart.js';

class ChartWidget extends React.Component {
	componentDidMount = () => {
		Chart.defaults.global.defaultFontColor = "white";
		Chart.defaults.global.defaultFontSize = 18;

		const myChart = new Chart(this.context, {
			type: 'line',
    		data: {
	        	// labels: [],
	        	datasets: [{
		            label: 'Tensão',
		            // data: [],
		            backgroundColor: [
		                'rgba(75, 149, 192, 0.2)'
		            ],
		            borderColor: [
		                'rgba(75, 149, 192, 1)'
		            ],
		            borderWidth: 1,
		            pointBorderColor: "white",
		            pointBackgroundColor: "white",
		            steppedLine: 'before',
    				lineTension: 0	
		        	}]
    		},
    		options: {
    			title: {
    				display: true,
    				text: 'Gráfico de tensão (V) x tempo (s)'
    			},
        		scales: {
            		yAxes: [{
                		ticks: {
                    		beginAtZero: false

                    	},
                    	scaleLabel: {
                    		display: true,
                    		labelString: "Tensão (V)",
                    		fontColor: "white"	
                    	}
            		}],
            		xAxes: [{
            			scaleLabel: {
            				display: true,
            				labelString: "Tempo (s)",
            				fontColor: "white"
            			}
            		}
            		]
        		}
    		}
		});

		// Retrieve data
		setInterval(() => {
			fetch('http://localhost:3001/data')
			.then(res => res.json())
			.then(jsonResp => {
					// Cleanup chart
					myChart.data.labels.splice(0);
					myChart.data.datasets[0].data.splice(0);

					jsonResp.forEach(data => {
						myChart.data.labels.push(parseFloat(data.x).toFixed(3));
						myChart.data.datasets[0].data.push(parseFloat(data.y));
						myChart.update(0);
					});
				});
		}, 600);
	}

	render = () => {
		return (
        	<canvas id="myChart" ref={(c) => this.context = c.getContext('2d')} width="400" height="150">
        	</canvas>
		);
	}
}

export default ChartWidget;