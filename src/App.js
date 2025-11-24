import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Client from './client/Client';
import { ensureClientDataExistsInSessionStorage } from './functions/data';
import CreateClient from './create-client/CreateClient';
import Options from './options/Options';
import { useState } from 'react';
import Home from './home/Home';

export default function App() {
  ensureClientDataExistsInSessionStorage();
  const [fontSize, setFontSize] = useState(18)

  const onFontSizeChange = (newFontSize) => {
  }

  return (
    <div style={{fontSize}}>

    <BrowserRouter>
      <header>
        <h1>Client Admin Portal</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create-client">Create client</Link>
        </nav>
      </header>

      <Options fontSize={fontSize} onFontSizeChange={onFontSizeChange}></Options>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/client/:clientId" element={<Client />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}