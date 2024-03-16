import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CodeExecution = () => {
  const [languages, setLanguages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selected, setSelected] = useState('C++');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {

    console.log("hello")
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/languages', {
          headers: {
            'X-RapidAPI-Key': 'ae0d886f0emshcd3ecab2f48382fp129f60jsn6d4ee8c1a6f4',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com',
          },
        });
        setLanguages(response.data);
      } catch (error) {
        console.error(error);
        setErrorMessage('Failed to fetch languages');
      }
    };

    fetchLanguages();
  }, []);

  const executeCode = async () => {
    console.log(selected)
    try {
      const response = await axios.post('http://localhost:3000/execute', {
        language: selected,
        code,
        input,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'ae0d886f0emshcd3ecab2f48382fp129f60jsn6d4ee8c1a6f4',
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com',
        },
      });
      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to execute code');
    }
  };

  return (
    <main className="max-w-6xl mx-auto p-20">
      <h1>Code Execution</h1>

      <select value={selected} onChange={(e) => setSelected(e.target.value)} className="block mb-10">
        {languages.map((language, index) => (
          <option key={index+1} value={language.code}>{language.name}</option>
        ))}
      </select>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code"
        id="codeEditor"
        className="w-full h-200px mb-10 p-10 font-mono"
      ></textarea>

      <button onClick={executeCode} id="executeButton" className="block mb-10 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Execute Code
      </button>

      {errorMessage ? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      ) : (
        <div id="outputDisplay" className="mt-20">{output}</div>
      )}


      <div>
        <h1>{output}</h1>
      </div>
    </main>
  );
};

export default CodeExecution;
