import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CompanyLogin from './components/CompanyLogin/CompanyLogin';
import UserLogin from './components/UserLogin/UserLogin';
import LandingHeader from './components/LandingHeader/LandingHeader';


function App() {
  return (
    <>
      <BrowserRouter>
      <LandingHeader />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login/business' element={<CompanyLogin />}/>
          <Route path='/login/customer' element={<UserLogin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
