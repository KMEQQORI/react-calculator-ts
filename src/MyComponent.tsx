import './index.css';
import React, { useState } from 'react';

interface ReactCalculatorProps {
    numberButtonColor?: string;
    operationButtonColor?: string;
    equalButtonColor?: string;
    clearButtonColor?: string;
}

const ReactCalculator: React.FC<ReactCalculatorProps> = ({
                                                             numberButtonColor = "#4b5563",
                                                             operationButtonColor = "#ef4444",
                                                             equalButtonColor = "#10b981",
                                                             clearButtonColor = "#f59e0b"
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

    return (
        <div className="calculator">
            <div className="screen">{screen}</div>
            <div className="buttons">
                <div
                    className="button"
                    style={{ backgroundColor: clearButtonColor }}
                    onClick={handleClear}
                >
                    C
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('7')}
                >
                    7
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('8')}
                >
                    8
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('9')}
                >
                    9
                </div>
                <div
                    className="button operation"
                    style={{ backgroundColor: operationButtonColor }}
                    onClick={() => handleOperation('/')}
                >
                    /
                </div>

                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('4')}
                >
                    4
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('5')}
                >
                    5
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('6')}
                >
                    6
                </div>
                <div
                    className="button operation"
                    style={{ backgroundColor: operationButtonColor }}
                    onClick={() => handleOperation('*')}
                >
                    *
                </div>

                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('1')}
                >
                    1
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('2')}
                >
                    2
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('3')}
                >
                    3
                </div>
                <div
                    className="button operation"
                    style={{ backgroundColor: operationButtonColor }}
                    onClick={() => handleOperation('-')}
                >
                    -
                </div>

                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('0')}
                >
                    0
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: numberButtonColor }}
                    onClick={() => handleSelectNumber('.')}
                >
                    .
                </div>
                <div
                    className="button"
                    style={{ backgroundColor: equalButtonColor }}
                    onClick={handleCalcul}
                >
                    =
                </div>
                <div
                    className="button operation"
                    style={{ backgroundColor: operationButtonColor }}
                    onClick={() => handleOperation('+')}
                >
                    +
                </div>
            </div>
        </div>
    );
};

export default ReactCalculator;
