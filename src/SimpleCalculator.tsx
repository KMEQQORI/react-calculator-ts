import './index.css';
import React, { useState } from 'react';

interface ReactCalculatorProps {
	numberButtonColor?: string;
	operationButtonColor?: string;
	equalButtonColor?: string;
	clearButtonColor?: string;
}

export const ReactSimpleCalculator: React.FC<ReactCalculatorProps> = ({
	numberButtonColor = '#4b5563',
	operationButtonColor = '#ef4444',
	equalButtonColor = '#10b981',
	clearButtonColor = '#f59e0b'
}) => {
	const [screen, setScreen] = useState('0');
	const [firstNumber, setFirstNumber] = useState(0);
	const [operation, setOperation] = useState('');

	function handleSelectNumber(value: string) {
		if (screen.length < 8) {
			setScreen(screen !== '0' ? screen + value : value);
		}
	}

	function handleClear() {
		setScreen('0');
		setFirstNumber(0);
		setOperation('');
	}

	function handleOperation(operation: string) {
		setFirstNumber(parseFloat(screen));
		setOperation(operation);
		setScreen('0');
	}

	function handleCalcul() {
		if (firstNumber !== 0 && operation !== '') {
			let result = 0;
			switch (operation) {
				case '+':
					result = firstNumber + parseFloat(screen);
					break;
				case '*':
					result = firstNumber * parseFloat(screen);
					break;
				case '-':
					result = firstNumber - parseFloat(screen);
					break;
				case '/':
					result = firstNumber / parseFloat(screen);
					break;
				default:
					result = 0;
			}

			setScreen(result.toString());
			setOperation('');
		}
	}

	const NumberButton = ({ value }: { value: string }) => (
		<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber(value)}>
			{value}
		</div>
	);

	return (
		<div className="calculator">
			<div className="screen">{screen}</div>
			<div className="buttons">
				<div className="button" style={{ backgroundColor: clearButtonColor }} onClick={handleClear}>
					C
				</div>
				{['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map(num => (
					<NumberButton key={num} value={num} />
				))}

				{['/', '*', '-', '+'].map(op => (
					<div
						key={op}
						className="button operation"
						style={{ backgroundColor: operationButtonColor }}
						onClick={() => handleOperation(op)}
					>
						{op}
					</div>
				))}

				<div className="button" style={{ backgroundColor: equalButtonColor }} onClick={handleCalcul}>
					=
				</div>
			</div>
		</div>
	);
};
