import "./UserInvoicePage.scss";
import UserSideNav from "../../components/UserSideNav/UserSideNav";
import { UserInvoice } from "../../components/UserInvoice/UserInvoice";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/constants";

const UserInvoicePage = () => {
  const [invoice, setInvoice] = useState(null);
  const [total, setTotal] = useState(0);

  const { invoiceId } = useParams();
  console.log(invoiceId);

  const fetchInvoice = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/invoices/${invoiceId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response.data);
      setInvoice(response.data.invoice);
      setTotal(response.data.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, [invoiceId]);
  return (
    <div className="homepage">
      <UserSideNav />
      {invoice && <UserInvoice isUser={true} invoice={invoice} total={total} />}
    </div>
  );
};

export default UserInvoicePage;
