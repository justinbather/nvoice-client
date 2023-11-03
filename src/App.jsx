import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CompanyLogin from "./components/CompanyLogin/CompanyLogin";
import UserLogin from "./components/UserLogin/UserLogin";
import LandingHeader from "./components/LandingHeader/LandingHeader";
// import CompanyHomePage from "./pages/CompanyHome/CompanyHomePage";
// import UserHomePage from "./pages/UserHome/UserHomePage";
import { CompanyInvoicePage } from "./pages/CompanyInvoicePage/CompanyInvoicePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <LandingHeader />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/company" element={<CompanyLogin />} />
          <Route path="/login/user" element={<UserLogin />} />
          {/* <Route path="/company/home" element={<CompanyHomePage />} /> */}
          {/* <Route path="/user/home" element={<UserHomePage />} /> */}
          <Route
            path="/company/invoices/:invoiceId"
            element={<CompanyInvoicePage />}
          />
          <Route path="/company/invoices" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
