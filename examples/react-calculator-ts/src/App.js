import './App.css';
import { ReactCalculator } from 'react-calculator-ts';

function App() {
	return (
		<div className="container">
			<div className="example">
				<h1 className="header">Simple calculator</h1>
				<ReactCalculator type={'simple'} />
			</div>
			<div className="example">
				<h1 className="header">Scientific calculator</h1>
				<ReactCalculator type={'scientific'} />
			</div>
			<div className="example">
				<h1 className="header">Customizable colors</h1>
				<ReactCalculator
					type={'scientific'}
					numberButtonColor={'#624E88'}
					operationButtonColor={'#FADFA1'}
					equalButtonColor={'#CB80AB'}
					clearButtonColor={'#8967B3'}
					scientificButtonColor={'#C96868'}
				/>
			</div>
		</div>
	);
}

export default App;
