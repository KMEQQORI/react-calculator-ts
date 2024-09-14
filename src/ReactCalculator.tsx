import React from 'react';
import { ReactScientificCalculator } from './SientificCalculator';
import { ReactSimpleCalculator } from './SimpleCalculator';

interface CalculatorWrapperProps {
	type: 'simple' | 'scientific' | 'graphing' | 'programmer';
	numberButtonColor?: string;
	operationButtonColor?: string;
	equalButtonColor?: string;
	clearButtonColor?: string;
}

export const ReactCalculator: React.FC<CalculatorWrapperProps> = ({
	type,
	numberButtonColor,
	operationButtonColor,
	equalButtonColor,
	clearButtonColor
}) => {
	switch (type) {
		case 'simple':
			return (
				<ReactSimpleCalculator
					numberButtonColor={numberButtonColor}
					operationButtonColor={operationButtonColor}
					equalButtonColor={equalButtonColor}
					clearButtonColor={clearButtonColor}
				/>
			);
		case 'scientific':
			return (
				<ReactScientificCalculator
					numberButtonColor={numberButtonColor}
					operationButtonColor={operationButtonColor}
					equalButtonColor={equalButtonColor}
					clearButtonColor={clearButtonColor}
				/>
			);
		case 'graphing':
			return <div>Graphing Calculator not yet implemented</div>;
		case 'programmer':
			return <div>Programmer Calculator not yet implemented</div>;
		default:
			return <div>Type de calculatrice non reconnu</div>;
	}
};
