import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widget from './components/Feed/Widget';
import Login from './components/Login/Login';
import { useStateValue } from './store/StateProvider';

const app = () => {

  // const [{ user }, dispatch] = useStateValue();
  

  const hello = () => {
    alert();
  }

  return (
    //BEM
    <div className="app">
      {/* {!user ? (<Login />) : (
        <div>
          
          <Header />

          <div className="app__body">

            
            <Sidebar />

            
            <Feed />

           
            <Widget />
          </div>
        </div>
      )} */}
      <p>HELLo</p>
    </div>
  );
}

export default app;
