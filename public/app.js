import React from 'react';
import logo from './logo192.png';
import './App.css'; // Mengimpor CSS

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <p>This is a simple React application.</p>
        <img src={logo} alt="App Logo" />
      </main>
      <footer>
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
