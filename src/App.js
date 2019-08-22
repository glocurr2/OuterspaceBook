/* eslint react/no-did-mount-set-state: 0 */
import React  from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';


import BookList from './BookList';
import BookDetail from './BookDetail';

const App = () => (
  <Router>
    <div className="App">
      
      <header className="App-header">
      <div className="logo-section">
        <Link to="/" >
          <div className="book-rocket"><img src="https://www.outerspacebook.net/images/book-rocket.png" className="book-rocket" alt="book rocket logo image" /></div>
          <div className="logo">
            <div><img src="https://www.outerspacebook.net/images/logo.png" className="logo" alt="outerspace book logo" /></div>
               <div className="tagline">A Guide to the Top 100 Science Fiction<br/>       
               and Fantasy Books of All Time.<br/>
               <span className="amazon">(as featured by amazon.com)</span><br/> 
              </div>
          </div>
        </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact="" path="/details/:id" component={BookDetail}/>
        <Route path="/:pagenum" component={BookList} />
       </Switch>
    </div>

    <footer>
      <div className="footer-text">2019 OuterspaceBook.net</div>
    </footer>
  </Router>
);

export default App;
