import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const [activeTab, setActiveTab] = useState('todo');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabItems = [
    { name: 'todo', label: '해야할 일' },
    { name: 'todocalendar', label: '캘린더' },
    { name: 'checklist', label: '체크리스트' },
  ];

  return (
    <StyledHeader>
      <header className="tabBg">
        <nav className="tab-menu">
          <ul>
            {tabItems.map((tabItem) => (
              <li
                key={tabItem.name}
                className={`tab ${activeTab === tabItem.name ? 'active' : ''}`}
                onClick={() => handleTabClick(tabItem.name)}
              >
                <Link to={`/${tabItem.name}`}>{tabItem.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 60px;
  a {
    display: block;
    padding: 18px 48px;
    color:#333;
  }
  .tabBg {
    background-color: #333;
    height: 100vh;
    width: 60px;
  }
  .tab-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tab {
    margin-top: 120px;
    transform: rotate(-90deg);
    width: 180px;
    height: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
  }
  .tab-menu .tab:nth-child(1){
    margin-top: 60px;
  background-color: #F2B3D6;
  }
  .tab-menu .tab:nth-child(2){
    background-color: #B7AEF2;

  }
  .tab-menu .tab:nth-child(3){
    background-color: #2BD999;
  }
  .tab-menu .tab.active {
    background-color: #ffffff;
    font-weight: bold;
    a{
      color: purple;
    }
  }
  .tab-menu .tab:hover {
    background-color: #F2EEEB;
    cursor: pointer;
    a{
      color: purple;
    }
  }
  
`;
