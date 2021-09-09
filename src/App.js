import {useState} from 'react'
import { BrowserRouter,Route,HashRouter } from 'react-router-dom';
import ScrollToTop from './routes/components/scrollToTop';
import Home from './routes/Home';
import About from './routes/About';
import Collections from './routes/Collections';
import Services from './routes/Services';
import ContactForm from './routes/components/Form';

import './App.scss';

function App() {

  const [showForm,setShowForm] = useState();

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop>
          <HashRouter basename='/'>
            <Route exact path="/">
              <Home toggleForm={toggleForm}/>
            </Route>
            <Route exact path='/about'>
              <About toggleForm={toggleForm}/>
            </Route>
            {/* <Route exact path='/about' render={()=> <About toggleForm={toggleForm}/>}/> */}
            <Route exact path='/collections'>
              <Collections toggleForm={toggleForm}/>
            </Route>
            <Route exact path='/services'>
              <Services toggleForm={toggleForm}/>
            </Route>
          </HashRouter>
        </ScrollToTop>
      </BrowserRouter>
      <ContactForm showForm={showForm} toggleForm={toggleForm}/>
    </div>
  );
}

export default App;
