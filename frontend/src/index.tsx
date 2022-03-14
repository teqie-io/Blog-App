import ReactDOM from 'react-dom';
import {Route, Routes,Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import AddArt from './components/AddArt';
import Article from './components/Article';
import Edit from './components/Edit';
import SignUP from './components/SignUp';
import SignIn from './components/SignIn';
import Verify from './components/Verify';
import Forgot from './components/forgot';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addarticle" element={<AddArt/>}/>
        <Route path="/article/:id" element={<Article/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUP/>}/>
        <Route path="/verify/:username" element={<Verify/>}/>
        <Route path="/forgot/:username" element={<Forgot/>}/>
      </Routes>
    </Router>,
  document.getElementById('root')
);

