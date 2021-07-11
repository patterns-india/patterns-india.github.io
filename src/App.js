import {useState} from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/">
            <Home showForm={showForm} toggleForm={toggleForm}/>
          </Route>
          <Route exact path='/about' component={About}/>
          <Route exact path='/collections' components={Collections}/>
          <Route exact path='/services' component={Services}/>
        </Switch>
      </BrowserRouter>
      <ContactForm showForm={showForm} toggleForm={toggleForm}/>
    </div>
  );
}

export default App;
