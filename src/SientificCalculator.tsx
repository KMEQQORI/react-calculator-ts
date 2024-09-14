import './index.css';
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals, FaSquareRootAlt, FaSuperscript } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

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
	scientificButtonColor = '#384B70'
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
					<BsTrash />
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('7')}>
					7
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('8')}>
					8
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('9')}>
					9
				</div>
				<div
					className="button operation"
					style={{ backgroundColor: operationButtonColor }}
					onClick={() => handleOperation('/')}
				>
					<FaDivide />
				</div>

				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('4')}>
					4
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('5')}>
					5
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('6')}>
					6
				</div>
				<div
					className="button operation"
					style={{ backgroundColor: operationButtonColor }}
					onClick={() => handleOperation('*')}
				>
					<FaTimes />
				</div>

				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('1')}>
					1
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('2')}>
					2
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('3')}>
					3
				</div>
				<div
					className="button operation"
					style={{ backgroundColor: operationButtonColor }}
					onClick={() => handleOperation('-')}
				>
					<FaMinus />
				</div>

				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('0')}>
					0
				</div>
				<div className="button" style={{ backgroundColor: numberButtonColor }} onClick={() => handleSelectNumber('.')}>
					.
				</div>
				<div className="button" style={{ backgroundColor: equalButtonColor }} onClick={handleCalcul}>
					<FaEquals />
				</div>
				<div
					className="button operation"
					style={{ backgroundColor: operationButtonColor }}
					onClick={() => handleOperation('+')}
				>
					<FaPlus />
				</div>

				{['sqrt', 'pow', 'log', 'ln', 'sin', 'cos', 'tan'].map(func => (
					<div
						key={func}
						className="button scientific"
						style={{ backgroundColor: scientificButtonColor }}
						onClick={() => handleScientificOperation(func)}
					>
						{func === 'sqrt' ? <FaSquareRootAlt /> : func === 'pow' ? <FaSuperscript /> : func.toUpperCase()}
					</div>
				))}
			</div>
		</div>
	);
};
