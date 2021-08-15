import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { FavoritePage } from './pages/Favorite';
import { CharacterList } from './components/CharacterList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <Router basename='/starwars'>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path="/people" children={CharacterList} />
          <Route exact path='/favorite' component={FavoritePage} />
          <Route path="" component={NotFoundPage} />
          <Route path="/notfound" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;