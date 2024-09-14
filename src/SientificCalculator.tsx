import './index.css';
import React, { useState } from 'react';

interface ReactScientificCalculatorProps {
	numberButtonColor?: string;
	operationButtonColor?: string;
	equalButtonColor?: string;
	clearButtonColor?: string;
	scientificButtonColor?: string;
}

export const ReactScientificCalculator: React.FC<ReactScientificCalculatorProps> = ({
	numberButtonColor = '#4b5563',
	operationButtonColor = '#ef4444',
	equalButtonColor = '#10b981',
	clearButtonColor = '#f59e0b',
	scientificButtonColor = '#3b82f6'
}) => {
	const [screen, setScreen] = useState('0');
	const [firstNumber, setFirstNumber] = useState<number | null>(null);
	const [operation, setOperation] = useState('');

	function handleSelectNumber(value: string) {
		if (screen.length < 12) {
			setScreen(screen !== '0' ? screen + value : value);
		}
	}

	function handleClear() {
		setScreen('0');
		setFirstNumber(null);
		setOperation('');
	}

	function handleOperation(op: string) {
		setFirstNumber(parseFloat(screen));
		setOperation(op);
		setScreen('0');
	}

	function handleScientificOperation(op: string) {
		let result = 0;
		const currentNumber = parseFloat(screen);
		switch (op) {
			case 'sqrt':
				result = Math.sqrt(currentNumber);
				break;
			case 'pow':
				result = Math.pow(currentNumber, 2);
				break;
			case 'log':
				result = Math.log10(currentNumber);
				break;
			case 'ln':
				result = Math.log(currentNumber);
				break;
			case 'sin':
				result = Math.sin(currentNumber);
				break;
			case 'cos':
				result = Math.cos(currentNumber);
				break;
			case 'tan':
				result = Math.tan(currentNumber);
				break;
			default:
				result = 0;
		}
		setScreen(result.toString());
	}

	function handleCalcul() {
		if (firstNumber !== null && operation !== '') {
			let result = 0;
			switch (operation) {
				case '+':
					result = firstNumber + parseFloat(screen);
					break;
				case '-':
					result = firstNumber - parseFloat(screen);
					break;
				case '*':
					result = firstNumber * parseFloat(screen);
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

	return (
		<div className="calculator">
			<div className="screen">{screen}</div>
			<div className="buttons">
				<div className="button" style={{ backgroundColor: clearButtonColor }} onClick={handleClear}>
					C
				</div>
				{[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
					<div
						key={num}
						className="button"
						style={{ backgroundColor: numberButtonColor }}
						onClick={() => handleSelectNumber(num.toString())}
					>
						{num}
					</div>
				))}
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('.')}>
					.
				</div>
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
				{['sqrt', 'pow', 'log', 'ln', 'sin', 'cos', 'tan'].map(func => (
					<div
						key={func}
						className="button scientific"
						style={{ backgroundColor: scientificButtonColor }}
						onClick={() => handleScientificOperation(func)}
					>
						{func.toUpperCase()}
					</div>
				))}
			</div>
		</div>
	);
};
