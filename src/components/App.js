import React from 'react';
import '../styles/App.css';

import TopNavBar from './TopNavBar';
import Main from './Main'

//class App extends React.Component
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Main />
    </div>
  );
}

export default App;
