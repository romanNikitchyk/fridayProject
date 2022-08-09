import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Main} from './pages/Main';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {Profile} from './pages/Profile';
import {Recovery} from './pages/Recovery';
import {NewPass} from './pages/NewPass';
import {NotFound} from './pages/NotFound';
import {Test} from './pages/Test';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Main/>}/>

            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/profile'} element={<Profile/>}/>

            <Route path={'/recovery'} element={<Recovery/>}/>
            <Route path={'/new-pass'} element={<NewPass/>}/>

            <Route path={'/*'} element={<NotFound/>}/>
            <Route path={'/test'} element={<Test/>}/>
        </Routes>
    </div>
  );
}

export default App;
