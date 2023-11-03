import "./CompanyHomePage.scss";
import CompanySideNav from "../../components/CompanySideNav/CompanySideNav";
import { UserInvoice } from "../../components/UserInvoice/UserInvoice";

const CompanyHomePage = () => {
  return (
    <div className="homepage">
      <CompanySideNav />
      <UserInvoice />
    </div>
  );
};

export default CompanyHomePage;
