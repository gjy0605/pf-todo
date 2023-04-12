import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoComp from './components/TodoComp';
import TodoCalendar from './components/TodoCalendar';
import CheckList from './components/CheckList';
import Header from './components/Header';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <BrowserRouter className="content">
        <Header />
        <Routes>
          <Route path="/todo" element={<TodoComp className="todo-component" />} />
          <Route path="/todocalendar" element={<TodoCalendar className="calendar-component" />} />
          <Route path="/checklist" element={<CheckList className="checklist-component" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
