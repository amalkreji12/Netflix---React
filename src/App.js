
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import {originals, action,thriller,crime,animation} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url={originals} title='Netflix Original'/>
      <RowPost url={action} title='Action' isSmall={true}/>
      <RowPost url={thriller} title='Thriller' isSmall={true}/>
      <RowPost url={crime} title='Crime' isSmall={true}/>
      <RowPost url={animation} title='Animation' isSmall={true}/>
      <Footer/>
    </div>
  );
}

export default App;
