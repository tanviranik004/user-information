import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
//import News from './components/News/News'
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Fragment from './components/Fragment/Fragment';


function App() {
  
  return (
    <div className="App">
      <h2>React Bootstrap</h2>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
     

      <Button variant="primary">Primary</Button>
      
      
      
     
    </div>
  );
}

export default App;
