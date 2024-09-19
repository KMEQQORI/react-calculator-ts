import './index.css';
import React from 'react';
declare enum CalculatorType {
    SIMPLE = "SIMPLE",
    SCIENTIFIC = "SCIENTIFIC",
    GRAPHING = "GRAPHING",
    PROGRAMMER = "PROGRAMMER"
}
interface CalculatorWrapperProps {
    type: CalculatorType;
    numberButtonColor?: string;
    operationButtonColor?: string;
    equalButtonColor?: string;
    clearButtonColor?: string;
    scientificButtonColor?: string;
}
export declare const ReactCalculator: React.FC<CalculatorWrapperProps>;
export {};
