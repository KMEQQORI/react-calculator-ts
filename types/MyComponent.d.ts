import './index.css';
import React from 'react';
interface ReactCalculatorProps {
    numberButtonColor?: string;
    operationButtonColor?: string;
    equalButtonColor?: string;
    clearButtonColor?: string;
}
declare const ReactCalculator: React.FC<ReactCalculatorProps>;
export default ReactCalculator;
