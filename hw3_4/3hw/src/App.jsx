import React, { useState } from 'react';
import './App.css';

const operations = [
  { symbol: '+', operation: 
    (a, b) => a + b },

  { symbol: '-', operation: 
    (a, b) => a - b },

  { symbol: '*', operation: 
    (a, b) => a * b },

  { symbol: '/', operation: 
    (a, b) => (b !== 0 ? a / b : 'Деление на ноль') },

  { symbol: '^', operation: 
    (a, b) => Math.pow(a, b) },
    
  { symbol: 'sqrt', operation: 
    (a) => Math.sqrt(a) },
];

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [currentOperation, setCurrentOperation] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || (operation.symbol !== 'sqrt' && isNaN(n2))) {
      setResult('Введите корректные числа');
      return;
    }

    const res = operation.operation(n1, n2);
    setResult(res);
    setCurrentOperation(operation.symbol);
  };

  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <input
        type="text"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Число 1"
      />
      <input
        type="text"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Число 2"
        disabled={currentOperation === 'sqrt'}
      />
      <div>
        {operations.map((op) => (
          <button key={op.symbol} onClick={() => handleOperation(op)}>
            {op.symbol}
          </button>
        ))}
      </div>
      <div>
        <h2>Результат: {result}</h2>
      </div>
    </div>
  );
}

export default App;
