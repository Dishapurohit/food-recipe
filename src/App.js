import './App.css';
import './Styles.css';

import Home from './components/Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';

function App() {

  return (
    <div className='App'>
      <div className='container'>
        <Home></Home>
      </div>
    </div>
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" exact component={Home} />
    //       {/* Add other routes as needed */}
    //       {/* <Route path="/recipes" component={Recipes} />
    //       <Route path="/about" component={About} />
    //       <Route path="/contact" component={Contact} /> */}
    //     </Routes>
    //   </div>
    // </Router> 
  ) 

}
  
export default App;
