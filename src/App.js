import React, { useState } from 'react';
import TodoComp from './components/TodoComp';
import TodoCalendar from './components/TodoCalendar';
import CheckList from './components/CheckList';
import './App.css';

const contents = [
  {
    title: '해야할 일',
    content: <TodoComp className="todo-component" />
  },
  {
    title: '캘린더',
    content: <TodoCalendar className="calendar-component" />
  },
  {
    title: '체크리스트',
    content: <CheckList className="checklist-component" />
  }
];
const TableOfContents = ({ contents }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="table-of-contents">
      <div className="tabBg">
        <div className="tab-menu">
          {contents.map((content, index) => (
            <div
              key={index}
              className={`tab ${selectedTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {content.title}
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        {contents[selectedTab].content}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <TableOfContents contents={contents} />
    </div>
  );
};

export default App;
