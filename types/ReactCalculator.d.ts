import React from 'react';
interface CalculatorWrapperProps {
    type: 'simple' | 'scientific' | 'graphing' | 'programmer';
    numberButtonColor?: string;
    operationButtonColor?: string;
    equalButtonColor?: string;
    clearButtonColor?: string;
}
export declare const ReactCalculator: React.FC<CalculatorWrapperProps>;
export {};
