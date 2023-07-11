import logo from './logo.svg';
import './App.scss';
import MyComponent from './Examples/MyComponent.js'
import ListToDo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Examples/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {
  Routes,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

//import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
          {/* <Home />           */ }
          
        {/* <Switch>
          <Route path="/" end>
            <Home />
          </Route>
          <Route path="/todo">
            <ListToDo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          </Switch> */}


        
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/todo" element={ <ListToDo /> } />            
            <Route path="/about" element={ <MyComponent /> } /> 
            <Route path='/user' element={ <ListUser /> } />
            <Route path='/user/:id' element={ <DetailUser /> } />
            
        </Routes>
        
 

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <MyComponent/> */}
        {/* <ListToDo/> */}
      </header>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
      </div>
       
     </BrowserRouter>       
  );
}

export default App;
