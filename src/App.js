import './App.css';

import StarWarsDictionary from './components/star-wars-dictionary/star-wars-dictionary';
import CharacterDetails from './components/character-details/character-details';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StarWarsDictionary}/>
        <Route path="/character-details/:name" component={CharacterDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
