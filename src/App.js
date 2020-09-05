import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widget from './components/Feed/Widget';
import Login from './components/Login/Login';
import { useStateValue } from './store/StateProvider';

const app = () => {

  const [{ user }, dispatch] = useStateValue();
  
  return (
    //BEM
    <div className="app">
      {!user ? (<Login />) : (
        <div>
          {/* Header */}
          <Header />

          <div className="app__body">

            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <Feed />

            {/* Widgets */}
            <Widget />
          </div>
        </div>
      )}
    </div>
  );
}

export default app;
