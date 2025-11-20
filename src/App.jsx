import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import LoginForm from "./RoutingPages/LoginForm/LoginForm.jsx";
import RegisterForm from "./RoutingPages/RegisterForm/RegisterForm.jsx";
import './App.css'
import Home from "./components/Home/Home.jsx";



function App(){
    return(


            <BrowserRouter>
                <div>
                    <Header />
                    <Routes>
                        <Route path='/'  element={<Home/>}   />
                        <Route path='/LoginForm' element={<LoginForm />} />
                        <Route path='/RegisterForm' element={<RegisterForm />} />

                    </Routes>
                </div>

            </BrowserRouter>

    )
}

export default App