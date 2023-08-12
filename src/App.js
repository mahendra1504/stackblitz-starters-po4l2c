import React from 'react';
import './css/App';
// @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
import Create from './components/create';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Create />
      </div>
    </div>
  );
}

export default App;
