import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Home from './components/home';
import AboutMe from './components/aboutme';
import HobbiesAndInterests from './components/hobbiesandinterests';
import Lorem from './components/lorem';
import Avatar from './components/avatar';
import Song from './components/song';
import Career from './components/career';
import Contact from './components/contact';

import picture from './pic-and-audio/avatar-photo.jpg';
import audio from './pic-and-audio/classical-piano.mp3';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/aboutme">About Me</Link></span>
            <span><Link to="/hobbiesandinterests">Hobbies & Interests</Link></span>
            <span><Link to="/lorem">LOREM</Link></span>
            <span><Link to="/avatar">Avatar</Link></span>
            <span><Link to="/song">Song</Link></span>
            <span><Link to="/career">Career</Link></span>
            <span><Link to="/contact">Contact</Link></span>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/hobbiesandinterests" component={HobbiesAndInterests}/>
          <Route path="/lorem" component={Lorem}/>
          <Route path="/avatar">
            <Avatar picture={picture}/>
          </Route>
          <Route path="/song">
            <Song audio={audio}/>
          </Route>
          <Route path="/career" component={Career}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
