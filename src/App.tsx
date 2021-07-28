import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { FavoritesPage } from './pages/Favorite';
import { CharacterList } from './components/CharacterList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { useState } from 'react';

function App() {


//   const onSearchChange = (value: string) => {
//       value.toLowerCase();
//       setFilterName(value);
// console.log(value)
//   }

  return (
    <>
      <Router>
        {/* <Header onSearchChange={onSearchChange} /> */}
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path="/people/?page=:id" children={CharacterList} />
          <Route path='/favorite' component={FavoritesPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;