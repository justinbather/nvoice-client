import axios from "axios";
import "./UserOverview.scss";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/constants";
import { useEffect, useState } from "react";

const UserOverview = () => {
  const [paid, setPaid] = useState(null);
  const [unpaid, setUnpaid] = useState(null);
  const getUnpaid = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/invoices/unpaid`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setUnpaid(response.data.invoices);
    } catch (err) {
      console.log(err);
    }
  };

  const getPaid = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/invoices/paid`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setPaid(response.data.invoices);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPaid();
    getUnpaid();
  }, []);

  return (
    <div className="overview">
      <section className="overview__outstanding">
        <h2 className="overview__title">Outstanding</h2>

        <div className="overview__tilelist">
          {unpaid &&
            unpaid.map((item) => (
              <div className="tile">
                <h3 className="tile__amount">{item.company.name}</h3>
                <p className="tile__email">{item.company.email}</p>
                <p className="tile__date">{item.company.phoneNum}</p>
                <Link to={`/user/invoice/${item._id}`}>
                  <button className="tile__button">More Info</button>
                </Link>
              </div>
            ))}
          {/* <div className="tile">
            <h3 className="tile__amount">$755.00</h3>
            <p className="tile__email">email@email.com</p>
            <p className="tile__date">2023/11/3</p>
            <Link to="/user/invoice/:id">
              <button className="tile__button">More Info</button>
            </Link>
          </div> */}
        </div>
      </section>

      <section className="overview__paid">
        <h2 className="overview__title">Paid</h2>
        <div className="overview__tilelist">
          {paid &&
            paid.map((item) => (
              <div className="tile">
                <h3 className="tile__amount">{item.company.name}</h3>
                <p className="tile__email">{item.company.email}</p>
                <p className="tile__date">{item.company.phoneNum}</p>
                <Link to={`/user/invoice/${item._id}`}>
                  <button className="tile__button">More Info</button>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default UserOverview;
