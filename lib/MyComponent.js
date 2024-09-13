var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
import { useState } from 'react';
var ReactCalculator = function (_a) {
    var _b = _a.numberButtonColor, numberButtonColor = _b === void 0 ? "red" : _b, _c = _a.operationButtonColor, operationButtonColor = _c === void 0 ? "#ef4444" : _c, _d = _a.equalButtonColor, equalButtonColor = _d === void 0 ? "#10b981" : _d, _e = _a.clearButtonColor, clearButtonColor = _e === void 0 ? "#f59e0b" : _e;
    var _f = useState('0'), screen = _f[0], setScreen = _f[1];
    var _g = useState(0), firstNumber = _g[0], setFirstNumber = _g[1];
    var _h = useState(''), operation = _h[0], setOperation = _h[1];
    function handleSelectNumber(value) {
        if (screen.length < 8) {
            setScreen(screen !== '0' ? screen + value : value);
        }
    }
    function handleClear() {
        setScreen('0');
        setFirstNumber(0);
        setOperation('');
    }
    function handleOperation(operation) {
        setFirstNumber(parseFloat(screen));
        setOperation(operation);
        setScreen('0');
    }
    function handleCalcul() {
        if (firstNumber !== 0 && operation !== '') {
            var result = 0;
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
    return (_jsxs("div", __assign({ className: "calculator" }, { children: [_jsx("div", __assign({ className: "screen" }, { children: screen })), _jsxs("div", __assign({ className: "buttons" }, { children: [_jsx("div", __assign({ className: "button", style: { backgroundColor: clearButtonColor }, onClick: handleClear }, { children: "C" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('7'); } }, { children: "7" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('8'); } }, { children: "8" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('9'); } }, { children: "9" })), _jsx("div", __assign({ className: "button operation", style: { backgroundColor: operationButtonColor }, onClick: function () { return handleOperation('/'); } }, { children: "/" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('4'); } }, { children: "4" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('5'); } }, { children: "5" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('6'); } }, { children: "6" })), _jsx("div", __assign({ className: "button operation", style: { backgroundColor: operationButtonColor }, onClick: function () { return handleOperation('*'); } }, { children: "*" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('1'); } }, { children: "1" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('2'); } }, { children: "2" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('3'); } }, { children: "3" })), _jsx("div", __assign({ className: "button operation", style: { backgroundColor: operationButtonColor }, onClick: function () { return handleOperation('-'); } }, { children: "-" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('0'); } }, { children: "0" })), _jsx("div", __assign({ className: "button", style: { backgroundColor: numberButtonColor }, onClick: function () { return handleSelectNumber('.'); } }, { children: "." })), _jsx("div", __assign({ className: "button", style: { backgroundColor: equalButtonColor }, onClick: handleCalcul }, { children: "=" })), _jsx("div", __assign({ className: "button operation", style: { backgroundColor: operationButtonColor }, onClick: function () { return handleOperation('+'); } }, { children: "+" }))] }))] })));
};
export default ReactCalculator;
