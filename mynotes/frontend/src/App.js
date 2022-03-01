import React from "react";
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage'


function App() {
  return (
    <HashRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          
          <Routes> 
            <Route path="/" exact element={<NoteListPage />} />
            <Route path="note/:id/" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
