import React from "react";
import { Provider } from "react-redux";
import './App.css';
import UserManagement from "./Components/UserManagement";
import store from "./redux/store";

  
const App:React.FC = () =>
{
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>API Sample</h1>
            <Provider store={store}>
            <UserManagement/>
            </Provider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
