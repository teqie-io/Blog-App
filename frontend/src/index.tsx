import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes,Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import AddArt from './components/AddArt';
import Article from './components/Article';
import Edit from './components/Edit';

ReactDOM.render(
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addarticle">Add Article</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addarticle" element={<AddArt/>}/>
        <Route path="/article/:id" element={<Article/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </Router>,
  document.getElementById('root')
);

