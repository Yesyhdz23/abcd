import './App.css';
import React, { useState } from 'react';
import './App.css';

function App() {
 const [pregunta, setPregunta] = useState('');
 const [respuesta, setRespuesta] = useState('');

 const handleChange = (e) => {
    setPregunta(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    setRespuesta(`La pregunta es: ${pregunta}`);
 };

 return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Haz una pregunta:
          <input type="text" value={pregunta} onChange={handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      {respuesta && <p>{respuesta}</p>}
    </div>
 );
}

export default App;