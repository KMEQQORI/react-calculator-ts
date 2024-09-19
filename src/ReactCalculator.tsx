import './index.css';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals, FaSquareRootAlt, FaSuperscript } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

enum CalculatorType {
	SIMPLE = 'SIMPLE',
	SCIENTIFIC = 'SCIENTIFIC',
	GRAPHING = 'GRAPHING',
	PROGRAMMER = 'PROGRAMMER'
}

interface CalculatorWrapperProps {
	type: CalculatorType;
	numberButtonColor?: string;
	operationButtonColor?: string;
	equalButtonColor?: string;
	clearButtonColor?: string;
	scientificButtonColor?: string;
}

export const ReactCalculator: React.FC<CalculatorWrapperProps> = ({
	type = CalculatorType.SIMPLE,
	numberButtonColor = '#4b5563',
	operationButtonColor = '#ef4444',
	equalButtonColor = '#10b981',
	clearButtonColor = '#f59e0b',
	scientificButtonColor = '#7EACB5'
}) => {
	const [screenResult, setScreenResult] = useState('0');
	const [screenOperation, setScreenOperation] = useState('');
	const [firstNumber, setFirstNumber] = useState<number | null>(null);
	const [operation, setOperation] = useState('');
	const operationTextRef = useRef<HTMLSpanElement>(null);

	const isScientific = useMemo(() => type === CalculatorType.SCIENTIFIC, [type]);

	function formatResult(result: string) {
		let formattedResult = result;
		const numericResult = parseFloat(result);
		if ((Math.abs(numericResult) >= 1e8 || Math.abs(numericResult) < 1e-8) && numericResult !== 0) {
			formattedResult = numericResult.toExponential(8); //
		}
		if (formattedResult.includes('e')) {
			const [base, exponent] = formattedResult.split('e');
			return (
				<div className="screen-result">
					{base} <span className="screen-result-exponent">e{exponent}</span>
				</div>
			);
		}
		return formattedResult;
	}

	function updateDisplayOperation(text: string) {
		if (operationTextRef.current) {
			const element = operationTextRef.current;
			element.innerText = text;
			if (element.scrollWidth > element.clientWidth) {
				let truncatedText = '...' + text.slice(-20); // Tronquer et ajouter des '...'
				element.innerText = truncatedText;
			}
		}
	}

	useEffect(() => {
		updateDisplayOperation(screenOperation);
	}, [screenOperation]);

	function handleSelectNumber(value: string) {
		if (screenResult.length < 7) {
			setScreenResult(screenResult !== '0' ? screenResult + value : value);
			setScreenOperation(screenOperation + value);
		}
	}

	function handleClear() {
		setScreenResult('0');
		setScreenOperation('');
		setFirstNumber(null);
		setOperation('');
	}

	function handleOperation(op: string) {
		setFirstNumber(parseFloat(screenResult));
		setOperation(op);
		setScreenOperation(screenOperation + ` ${op} `);
		setScreenResult('0');
	}

	function handleCalcul() {
		if (firstNumber !== null && operation !== '') {
			let result = 0;
			switch (operation) {
				case '+':
					result = firstNumber + parseFloat(screenResult);
					break;
				case '-':
					result = firstNumber - parseFloat(screenResult);
					break;
				case '*':
					result = firstNumber * parseFloat(screenResult);
					break;
				case '/':
					result = firstNumber / parseFloat(screenResult);
					break;
				default:
					result = 0;
			}
			const formattedResult = parseFloat(result.toPrecision(8)).toString();
			setScreenResult(formattedResult);
			setOperation('');
		}
	}

	function handleScientificOperation(op: string) {
		let result = 0;
		const currentNumber = parseFloat(screenResult);
		switch (op) {
			case 'sqrt':
				result = Math.sqrt(currentNumber);
				setScreenOperation(`√(${screenOperation})`);
				break;
			case 'pow':
				result = Math.pow(currentNumber, 2);
				setScreenOperation(`(${screenOperation})^2`);
				break;
			case 'log':
				result = Math.log10(currentNumber);
				setScreenOperation(`log(${screenOperation})`);
				break;
			case 'ln':
				result = Math.log(currentNumber);
				setScreenOperation(`ln(${screenOperation})`);
				break;
			case 'sin':
				result = Math.sin(currentNumber);
				setScreenOperation(`sin(${screenOperation})`);
				break;
			case 'cos':
				result = Math.cos(currentNumber);
				setScreenOperation(`cos(${screenOperation})`);
				break;
			case 'tan':
				result = Math.tan(currentNumber);
				setScreenOperation(`tan(${screenOperation})`);
				break;
			default:
				result = 0;
		}

		const formattedResult = parseFloat(result.toPrecision(8)).toString();
		setScreenResult(formattedResult);
	}

	return (
		<div className="calculator">
			<div className="screen">
				{isScientific && (
					<div className="screen-operation">
						<span id="operation-text" ref={operationTextRef}>
							{screenOperation}
						</span>
					</div>
				)}
				<div className="screen-result">{formatResult(screenResult)}</div>
			</div>

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

				{isScientific &&
					['sqrt', 'pow', 'log', 'ln', 'sin', 'cos', 'tan'].map(func => (
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
