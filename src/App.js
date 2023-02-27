import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
  <Router>
    <Header />
   <div style={{
    padding:"0px 40px"
   }} className=''>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:imdbID' element={<MovieDetails />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
   </div>
    {/* <PageNotFound /> */}
    <Footer /> 
  </Router>
    </div>
  );
}

export default App;
