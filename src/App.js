
import './App.css';
import Header from './components/header.jsx';
import Template from './components/template.jsx';
import Form from './components/forms.jsx';
import React from 'react';
import Footer from './components/footer'
// import Football from './components/football.jsx';



function App() {
  return (
    <div className="App">
      <Header/>
      <Template/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;

