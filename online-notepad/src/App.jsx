import { useState } from 'react';
import './App.css';

function App() {
  const [note, setNote] = useState(
    localStorage.getItem('note') || ''
  );

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem('note', e.target.value);
  };

  const handleClear = () => {
    setNote('');
    localStorage.removeItem('note');
  };

  return (
    <div className='app'>
      <h1>📝 Online Notepad</h1>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Start typing here..."
      />
      <div className="buttons">
        <button onClick={handleClear}>Clear Note</button>
      </div>
    </div>
  );
}

export default App;
