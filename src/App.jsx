import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CompanyLogin from "./components/CompanyLogin/CompanyLogin";
import UserLogin from "./components/UserLogin/UserLogin";
import LandingHeader from "./components/LandingHeader/LandingHeader";
import CompanyHomePage from "./pages/CompanyHomePage/CompanyHomePage";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import { CompanyInvoicePage } from "./pages/CompanyInvoicePage/CompanyInvoicePage";
import CreateInvoicePage from "./pages/CreateInvoicePage/CreateInvoicePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <LandingHeader />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/company" element={<CompanyLogin />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/company/home" element={<CompanyHomePage />} />
          <Route path="/user/home" element={<UserHomePage />} />
          <Route
            path="/company/invoices/:invoiceId"
            element={<CompanyInvoicePage />}
          />
          <Route path="/company/create-invoice" element={<CreateInvoicePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
