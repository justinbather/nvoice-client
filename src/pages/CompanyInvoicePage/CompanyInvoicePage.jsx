import CompanySideNav from "../../components/CompanySideNav/CompanySideNav";
import { UserInvoice } from "../../components/UserInvoice/UserInvoice";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/constants";

export const CompanyInvoicePage = () => {
  const [invoice, setInvoice] = useState(null);
  const [total, setTotal] = useState(0);

  const { invoiceId } = useParams();

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
    <>
      <div className="homepage">
        <CompanySideNav />
        {invoice && (
          <UserInvoice isUser={false} invoice={invoice} total={total} />
        )}
      </div>
    </>
  );
};
