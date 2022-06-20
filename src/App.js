import React, { useState } from 'react';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import './App.css';

export default function App() {
  const [ tab, setTab ] = useState({tab: 0});

  function handleChangeTab(tab) {
    setTab({tab: tab});
  }

  return (
    <div className="app-container">
      <Header changeTab={handleChangeTab} />
      <Main selection={tab} />
      <Footer />
    </div>
  );
}
