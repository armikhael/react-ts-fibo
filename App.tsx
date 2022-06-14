import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [array, setArray] = useState<number[]>();
  const [inputs, setInputs] = useState<any>({});

  const handleFib = (number: number) => {
    let fib = [0, 1];
    for (let i = 2; i <= number; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setArray(fib);
  };

  const handleChange = (event) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFib(inputs.number);
  };

  useEffect(() => {
    handleFib(5);
  }, []);

  return (
    <div>
      <h1>Sucesión de Fibonacci!</h1>
      <p>Ingrese un numero :) </p>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="number"
          name="number"
          value={inputs.number}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" />
      </form>
      {array && (
        <pre>
          <ul>
            {array.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </pre>
      )}
    </div>
  );
}
